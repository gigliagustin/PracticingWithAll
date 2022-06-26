function CreateDiary() {
    
    class Contact{
        constructor(name, phoneNumber){
            this.name = name;
            this.phoneNumber = phoneNumber;
        }
    }
    
    class Diary{
    constructor(size = 10){
     this.contacts = [];
     this.size = size;   
    };
    //Creating a new contact
    addContact(contact){
        if(this.contacts.length < this.size){
            this.contacts.push(contact);
        }else{
            alert('Se ha añadido la cantidad máxima de contactos.')
        }
    };
    
    //Checking if new contact exist
    contactExist(contact){
        for (let i = 0; i < this.contacts.length; i++) {
            const contactName = this.contacts[i].name;
            if (contact.name === contactName) {
                return true;
            }
        }
        return false;
    };
    //List all contacts
    listContact(){
        for (let i = 0; i < this.contacts.length; i++) {
            const contactName = this.contacts[i].name;
            const contactPhoneNumber = this.contacts[i].phoneNumber;
            document.write(contactName+ ' '+ contactPhoneNumber + '<br>');
        };
    }
    
    //Search a contact and returns the name with the phoneNumber
    searchContact(name){
        for (let i = 0; i < this.contacts.length; i++) {
            const contactName = this.contacts[i].name;
            const contactPhoneNumber = this.contacts[i].phoneNumber;
            if(name === this.contacts[i].name){
                document.write('El resultado de la búsqueda es: '+ contactName + ' y su número es: '+contactPhoneNumber);
            }
            
        }
    }
    
    //Delete a contact
    deleteContact(contact){
        if(this.contactExist(contact)){
            for (let i = 0; i < this.contacts.length; i++) {
                const contacts = this.contacts[i];
                if (contact.name === contacts.name) {
                    this.contacts.splice(i,1)
                    alert('El contacto '+ contact.name + 'fue eliminado exitosamente.' );
                }
            }
        } else{
            alert('El contacto no existe en la agenda.');
        }
    }
    
    //Consults if the Diary is full
    fullDiary(){
        if (this.contacts.length < this.size) {
            alert('La agenda aún no está llena.');
        } else{
            alert('La agenda está llena.');
        }
    }
    //To count the remaining size of the Diary
    countSize(){
        let remainingSize = this.size - this.contacts.length;
        alert('Tienes ('+ remainingSize+') de espacios libre en tu agenda.');
    }
}


let myDiary = new Diary();
let contact1 = new Contact('Agustin', '3815879021');
let contact2 = new Contact('Ani','3815854112');
let contact3 = new Contact('Salv','3814651542');
let contact4 = new Contact("Hubeto", '3813024722');
myDiary.addContact(contact1);
myDiary.addContact(contact2);
myDiary.addContact(contact3);
console.log(myDiary);
console.log('¿El contacto '+contact3.name+' existe? ' +myDiary.contactExist(contact3));
myDiary.listContact();
myDiary.searchContact(contact2.name);
myDiary.deleteContact(contact4);
myDiary.fullDiary();
myDiary.countSize();
}