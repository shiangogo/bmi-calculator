export default class Handlers{
  static handleCalculateBMI(event, weight, height) {
    height = height / 100;
    const bmi = weight / (height * height);
    console.log(bmi)
    return bmi;
  }
}
