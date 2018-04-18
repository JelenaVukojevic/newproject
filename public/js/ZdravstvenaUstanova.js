class Person {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
}

class Doctor extends Person {
    constructor(first_name, last_name, speciality) {
        super(first_name, last_name);
        this.speciality = speciality;
    }

    bookLabTest(test) {
        console.log('Doctor ' + this.last_name + ' booked a test ' + test.type + 
        + ', for patient ' + test.patient.first_name + ' ' + test.patient.last_name);
    }
}

class Patient extends Person {
    constructor(first_name, last_name, jmbg, chart_number) {
        super(first_name, last_name);
        this.jmbg = jmbg;
        this.chart_number = this.chart_number;
    }

    chooseDoctor(doctor) {
        console.log('Patient ' + this.first_name + ' ' + this.last_name + 
        ' chose doctor ' + doctor.last_name + ' as personal doctor.');
    }
}

class LabTest {
    constructor(time, date, type, patient) {
        this.time = time;
        this.date = date;
        this.type = type;
        this.patient = patient;
    }

    getTestResults() {}
}

class BloodPresure extends LabTest {
    constructor(time, date, type, patient, systolic, diastolic, puls) {
        super(time, date, 'Blood presure', patient);
        this.systolic = 120;
        this.diastolic = 80;
        this.puls = 60;
    }

    getTestResults() {
        console.log('Results: blood presure is: ' + this.systolic + '/' + this.diastolic
        + ', puls is: ' + this.puls);
    }
}

class BloodSugar extends LabTest {
    constructor(time, date, type, patient, value, last_meal) {
        super(time, date, 'Blood sugar', patient);
        this.value = 8;
        this.last_meal = '8:00';
    }

    getTestResults() {
        console.log('Results: blood sugar is: ' + this.value
        + ', time of last meal is: ' + this.last_meal);
    }
}

class CholesterolLevel extends LabTest {
    constructor(time, date, type, patient, value, last_meal) {
        super(time, date, 'Cholesterol level', patient);
        this.value = 10;
        this.last_meal = '9:00';
    }

    getTestResults() {
        console.log('Results: cholesterol level is: ' + this.value
        + ', time of last meal is: ' + this.last_meal);
    } 
}

var drMilan = new Doctor('Milan', 'Milankovic', 'Cardiologist');
var Dragan = new Patient('Dragan', 'Draganovic', '2457895218', '2558');
var labTest1 = new BloodSugar('12:30', '18.04.2018', Dragan);

Dragan.chooseDoctor(drMilan);
drMilan.bookLabTest(labTest1);