export default function validPhone(phone) {
  return phone
        && phone.length === 11
        && Number(phone).split('').every((el) => typeof el === 'number')
        && phone.split('')[0] === ('7' || '8' || '+7');
}
