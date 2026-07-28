const readline = require('readline');

class Contact {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        this.prev = null;
        this.next = null;
    }
}

// naive search to find pattern in text
function naiveSubstringSearch(text, pattern) {
    const textLower = text.toLowerCase();
    const patternLower = pattern.toLowerCase();
    const n = textLower.length;
    const m = patternLower.length;

    if (m === 0) return true;
    if (m > n) return false;

    for (let i = 0; i <= n - m; i++) {
        let j = 0;
        while (j < m && textLower[i + j] === patternLower[j]) {
            j++;
        }
        if (j === m) return true;
    }
    return false;
}

class ContactManager {
    constructor() {
        this.head = null;
        this.tail = null;
        this.hashTable = {};
    }

    addContact(name, phone) {
        if (!name || !phone) {
            console.log('Name and phone number are required.');
            return;
        }

        const newContact = new Contact(name, phone);

        if (!this.head) {
            this.head = newContact;
            this.tail = newContact;
        } else {
            this.tail.next = newContact;
            newContact.prev = this.tail;
            this.tail = newContact;
        }

        // store contact in hash table for quick name lookup
        this.hashTable[name.toLowerCase()] = newContact;
        console.log('Contact added.');
    }

    searchByKeyword(keyword) {
        if (!keyword) {
            console.log('Keyword cannot be empty.');
            return;
        }

        let found = false;
        let current = this.head;

        while (current) {
            if (naiveSubstringSearch(current.name, keyword)) {
                console.log(`Match found: ${current.name} - ${current.phone}`);
                found = true;
            }
            current = current.next;
        }

        if (!found) {
            console.log('No matching contacts found.');
        }
    }

    searchByName(name) {
        const contact = this.hashTable[name.toLowerCase()];
        if (contact) {
            console.log(`Found: ${contact.name} - ${contact.phone}`);
        } else {
            console.log('Contact not found.');
        }
    }

    displayForward() {
        if (!this.head) {
            console.log('No contacts available.');
            return;
        }

        let current = this.head;
        while (current) {
            console.log(`${current.name} - ${current.phone}`);
            current = current.next;
        }
    }

    displayBackward() {
        if (!this.tail) {
            console.log('No contacts available.');
            return;
        }

        let current = this.tail;
        while (current) {
            console.log(`${current.name} - ${current.phone}`);
            current = current.prev;
        }
    }
}

function showMenu() {
    console.log('\n1. Add Contact');
    console.log('2. Search by Keyword');
    console.log('3. Search by Exact Name');
    console.log('4. View All (Forward)');
    console.log('5. View All (Backward)');
    console.log('6. Exit');
}

function startCLI() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const manager = new ContactManager();

    const askOption = () => {
        showMenu();
        rl.question('\nEnter option: ', (option) => {
            const opt = option.trim();

            if (opt === '1') {
                rl.question('Name: ', (name) => {
                    rl.question('Phone: ', (phone) => {
                        manager.addContact(name.trim(), phone.trim());
                        askOption();
                    });
                });
            } else if (opt === '2') {
                rl.question('Search keyword: ', (keyword) => {
                    manager.searchByKeyword(keyword.trim());
                    askOption();
                });
            } else if (opt === '3') {
                rl.question('Exact name: ', (name) => {
                    manager.searchByName(name.trim());
                    askOption();
                });
            } else if (opt === '4') {
                manager.displayForward();
                askOption();
            } else if (opt === '5') {
                manager.displayBackward();
                askOption();
            } else if (opt === '6') {
                console.log('Goodbye!');
                rl.close();
            } else {
                console.log('Invalid option. Please try again.');
                askOption();
            }
        });
    };

    askOption();
}

if (require.main === module) {
    startCLI();
}

module.exports = { Contact, ContactManager, naiveSubstringSearch };
