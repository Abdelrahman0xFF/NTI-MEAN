import Person from "./Person.js";

class Principal extends Person {
    #members = [];

    constructor(name, email, id) {
        super(name, email, id);
    }

    addMember(member) {
        if (!(member instanceof Person) || member instanceof Principal) {
            console.error("Only Teacher or Student instances can be added");
            return;
        }
        this.#members.push(member);
        console.log(`${member.name} has been added as a school member`);
    }

    removeMember(id) {
        const index = this.#members.findIndex((member) => member.id === id);
        if (index === -1) {
            console.error(`Member with ID ${id} not found`);
            return;
        }
        const [removed] = this.#members.splice(index, 1);
        console.log(`${removed.name} has been removed from the school`);
    }

    listMembers() {
        if (this.#members.length === 0) {
            console.log("No members in the school yet.");
            return;
        }
        console.log(`School members managed by Principal ${this.name}:`);
        this.#members.forEach((member) =>
            console.log(`- ${member.name} (${member.constructor.name})`),
        );
    }

    describeRole() {
        return `${this.name} is the Principal, overseeing ${this.#members.length} members of the school`;
    }
}

export default Principal;
