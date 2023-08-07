/* 
6kyu - Thinking & Testing : Mobile phone simulator
https://www.codewars.com/kata/56de82fb9905a1c3e6000b52/train/javascript

No Story

No Description

Only by Thinking and Testing
*/

//Try to write a code for a mobile phone emulator
//You don't need define the val 'contacts',
//I will give you it after test beginning!

// ==== for test =====
let contacts = [
  { name: "John", number: 11111111, ring: "Do Re Mi" },
  { name: "Tom", number: 22222222, ring: "Mi Re Do" },
  { name: "Jack", number: 33333333, ring: "Fa So La Ti" }
];
// ==== for test =====

class Phone {
  static defaultRing = "Di Da Di";
  constructor() {
    this.phone = null;
    this.callee = null;
    this.isSpeaking = false;
    this.isRinging = false;
  }

  get ring() {
    if (this.isRinging) {
      return this.caller ? this.caller.ring : Phone.defaultRing;
    } else return "";
  }

  get screen() {
    return this.isRinging ? `Call: ${this.caller.name}\nNumber: ${this.caller.number}` : "";
  }

  connect() {
    this.isRinging = false;
    this.isSpeaking = true;
  }

  get microphone() {
    this.isRinging = false;
    if (!this.caller || !this.isSpeaking) return "";
    return this.caller.name === 'stranger' ? "Hello, who is speaking, please?" : `Hello, ${this.caller.name}!`;
  }

  incomingcall(n) {
    let c = contacts.find(x => x.number === n);
    if (c) {
      this.caller = c;
    } else {
      this.caller = {
        name: 'stranger',
        number: n,
        ring: "Di Da Di"
      }
    }
    this.isRinging = true;
    this.isSpeaking = false;
  }

  hangup() {
    this.caller = null;
    this.isRinging = false;
    this.isSpeaking = false;
  }
}

let aPhone = new Phone();
console.log(aPhone.ring, "", "")
console.log(aPhone.screen, "", "")
console.log(aPhone.microphone, "", "")
//Someone callin, is your friend John
aPhone.incomingcall(11111111);
console.log(aPhone.ring, '=>', "Do Re Mi", "")
console.log(aPhone.screen, '\n=>\n', "Call: John\nNumber: 11111111", "\n---\n")
console.log(aPhone.microphone, '(mic)=>', "", "")
//Connect the call
aPhone.connect()
console.log(aPhone.microphone, '=>', "Hello, John!", "")
console.log(aPhone.ring, '(ring)=>', "", "")
console.log(aPhone.screen, '(scr)=>', "", "")
//Hangup the call
aPhone.hangup()
console.log(aPhone.ring, "", "")
console.log(aPhone.screen, "", "")
console.log(aPhone.microphone, "", "")
//And next...
aPhone.incomingcall(33333333);
console.log(aPhone.ring, '(33)=>', "Fa So La Ti", "")
console.log(aPhone.screen, "Call: Jack\nNumber: 33333333", "")
console.log(aPhone.microphone, "", "")
aPhone.connect()
console.log(aPhone.microphone, "Hello, Jack!", "")
aPhone.hangup()
console.log('\n--- strange call ---\n');
//A stranger call in
aPhone.incomingcall(44444444);
console.log(aPhone.ring, '=>', "Di Da Di", "")
console.log(aPhone.screen, '\n=>\n', "Call: stranger\nNumber: 44444444", "")
console.log(aPhone.microphone, '(m1)=>', "(empty)", "")
aPhone.connect()
console.log(aPhone.microphone, '(m2)=>', "Hello, who is speaking, please?", "")
aPhone.hangup()

// best

/* 
class Phone {
  constructor() {
    this.hangup()
  }
  
  incomingcall(number) {
    const contact = this.contact = contacts.find(contact => contact.number === number)
    this.ring = contact ? contact.ring : "Di Da Di"
    this.screen = `Call: ${contact ? contact.name : "stranger"}\nNumber: ${number}`
  }
  
  connect() {
    this.ring = ""
    this.screen = ""
    this.microphone = this.contact
      ? `Hello, ${this.contact.name}!`
      : "Hello, who is speaking, please?"
  }
  
  hangup() {
    this.contact = null
    this.ring = ""
    this.screen = ""
    this.microphone = ""
  }
}
*/
