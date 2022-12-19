/* 
2kyu - Assembler Interpreter
*/

function assemblerInterpreter(program) {
  // auxiliary functions for better code reading
  const isRegister = (a) => isNaN(a); // register or number?
  const labelRegexp = new RegExp(/^(.+):$/);
  const isLabel = (a) => !!a.match(labelRegexp);
  function getMsgString(str) { // parse msg command to array
    str = str.replace(/^msg\s+/, '');
    let msgString = ['msg'], inQuotes = false, start = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === "'") { inQuotes = !inQuotes; }
      else if (str.charAt(i) === ',' && !inQuotes) {
        msgString.push(str.slice(start, i).trim()); start = i + 1;
      }
    }
    msgString.push(str.slice(start).trim());
    return msgString;
  }

  function getCommand(str) {
    const opXY = ['mov', 'add', 'sub', 'mul', 'div', 'cmp']; // commands with two arguments
    let cmd = str.split(' ')[0];
    if (cmd === 'ret' || cmd === 'end') {
      return [cmd];
    } else if (cmd === 'msg') {
      return getMsgString(str);
    } else if (opXY.includes(cmd)) {
      return str.match(/(\S+)\s+([a-z]+)\,?\s?(.+)/).slice(1);
    } else {
      return str.split(/\s+/g);
    }
  }
  // main code   
  let labels = {}, registers = {}, callStack = [], cmpResult = 0, output = "", currentFunc = null;
  // convert program text into array of commands
  let commands = program.split('\n')
    .map(line => line.split(';')[0].trim())
    .filter(line => line.length > 0 && line[0] != ';');
  // collect labels
  for (let i = 0; i < commands.length; i++) {
    let match = commands[i].match(labelRegexp);
    if (match) {
      labels[match[1]] = i;
    }
  }
  // process the program
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    if (isLabel(command)) {
      break;
    }
    let cmdArray = getCommand(command);
    let [cmd, op1, op2] = cmdArray;
    switch (cmd) {
      case 'mov':
        registers[op1] = isRegister(op2) ? registers[op2] : +op2; break;
      case 'inc':
        ++registers[op1]; break;
      case 'dec':
        --registers[op1]; break;
      case 'add':
        registers[op1] += (isRegister(op2) ? registers[op2] : +op2);
        break;
      case 'sub':
        registers[op1] -= (isRegister(op2) ? registers[op2] : -(+op2));
        break;
      case 'mul':
        registers[op1] *= (isRegister(op2) ? registers[op2] : +op2);
        break;
      case 'div':
        registers[op1] = Math.floor(registers[op1] / (isRegister(op2) ? registers[op2] : +op2));
        break;
      case 'jmp':
        i = labels[op1];
        break;
      case 'cmp':
        let v1 = isRegister(op1) ? registers[op1] : +op1,
          v2 = isRegister(op2) ? registers[op2] : +op2;
        cmpResult = v1 - v2;
        break;
      case 'jne':
        if (cmpResult != 0) {
          i = labels[op1];
        }
        break;
      case 'je':
        if (cmpResult === 0) {
          i = labels[op1];
        }
        break;
      case 'jge':
        if (cmpResult >= 0) {
          i = labels[op1];
        }
        break;
      case 'jg':
        if (cmpResult > 0) {
          i = labels[op1];
        }
        break;
      case 'jle':
        if (cmpResult <= 0) {
          i = labels[op1];
        }
        break;
      case 'jl':
        if (cmpResult < 0) {
          i = labels[op1];
        }
        break;
      case 'call':
        if (op1 !== currentFunc) { // trick to avoid jmp/call mess
          callStack.push(i);
          currentFunc = op1;
        }
        i = labels[op1];
        break;
      case 'ret':
        i = callStack.pop();
        currentFunc = null;
        break;
      case 'end':
        return output;
      case 'msg':
        let res = [];
        for (let j = 1; j < cmdArray.length; j++) {
          if (cmdArray[j][0] === "'") {
            res.push(cmdArray[j].replace(/\'/g, ''));
          } else {
            res.push(registers[cmdArray[j]] === undefined ? cmdArray[j] : registers[cmdArray[j]]);
          }
        }
        output = res.join('');
        break;
    }
  }
  return -1;
}