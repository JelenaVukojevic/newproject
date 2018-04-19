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
        ActivityLog.logCreateDoctor(this);
    }

    bookLabTest(test, patient) {
        console.log('Doctor ' + this.last_name + ' booked a test: ' + test.type 
        + ', for patient ' + patient.first_name + ' ' + patient.last_name);
    }
}

class Patient extends Person {
    constructor(first_name, last_name, jmbg, chart_number) {
        super(first_name, last_name);
        this.jmbg = jmbg;
        this.chart_number = this.chart_number;
        ActivityLog.logCreatePatient(this);
    }

    chooseDoctor(doctor) {
        console.log('Patient ' + this.first_name + ' ' + this.last_name + 
        ' chose doctor ' + doctor.last_name + ' as personal doctor.');
        ActivityLog.logChooseDoctor(this, doctor);
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

    getTestResults(patient) {
        ActivityLog.logLabTest(this, patient);
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

    getTestResults(patient) {
        ActivityLog.logLabTest(this, patient);
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

    getTestResults(patient) {
        ActivityLog.logLabTest(this, patient);
        console.log('Results: cholesterol level is: ' + this.value
        + ', time of last meal is: ' + this.last_meal);
    } 
}

class ActivityLog {
    static logCreateDoctor(doctor) {
        console.log('[' + new Date(Date.now()).toLocaleString() + 
        '] created doctor ' + doctor.first_name + ' ' + doctor.last_name);
    }

    static logCreatePatient(patient) {
        console.log('[' + new Date(Date.now()).toLocaleString() + 
        '] created doctor ' + patient.first_name + ' ' + patient.last_name);
    }

    static logChooseDoctor(patient, doctor) {
        console.log('[' + new Date(Date.now()).toLocaleString() + 
        '] patient ' + patient.first_name + ' ' + patient.last_name +
        ' chose doctor dr ' + ' ' + doctor.last_name);
    }

    static logLabTest(test, patient) {
        console.log('[' + new Date(Date.now()).toLocaleString() + 
        '] patient ' + patient.first_name + ' ' + patient.last_name +
        ' had ' + test.type + ' test.');
    }
}

var drMilan = new Doctor('Milan', 'Milankovic', 'Cardiologist');
var Dragan = new Patient('Dragan', 'Draganovic', '2457895218', '2558');
Dragan.chooseDoctor(drMilan);

var labTest1 = new BloodSugar('12:30', '18.04.2018', Dragan);

drMilan.bookLabTest(labTest1, Dragan);
labTest1.getTestResults(Dragan);
