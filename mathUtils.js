export function add(a, b) {
  return Number(a) + Number(b);
}

export function multiply(a, b) {
  return Number(a) * Number(b);
}

export default function greet(name = 'Developer') {
  const msg = `👋 Hey ${name}! Your modules are wired up.`;
  console.log(msg);
  return msg;
}
