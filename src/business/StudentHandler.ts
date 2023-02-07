import { getStudentInfo, setStudentInfo } from "../data/studentData";

export class StudentInfo {
  fullName: string;
  gender: string;
  identityCard: number;
  country: string;
  maritalStatus: string;
  nationality: string;
  religion: string;
  cgpa: number;
  studentType: "Undergraduate" | "Postgraduate" | undefined;
  supervisor?: string;
  pscCourseTaken?: "yes" | "no";
  locality?: "Local" | "International";

  constructor(values: StudentInfo) {
    this.fullName = values.fullName;
    this.gender = values.gender;
    this.identityCard = values.identityCard;
    this.country = values.country;
    this.maritalStatus = values.maritalStatus;
    this.nationality = values.nationality;
    this.religion = values.religion;
    this.studentType = values.studentType;
    this.cgpa = values.cgpa;
    this.locality = values.locality;
  }
}

export class UndergraduateStudent extends StudentInfo {}

export class PostgraduateStudent extends StudentInfo {
  supervisor: string | undefined;
  pscCourseTaken: "yes" | "no" | undefined;

  constructor(values: StudentInfo) {
    super(values);
    this.supervisor = "Dr Adila";
    this.pscCourseTaken = values.pscCourseTaken;
  }
}

export class StudentHandler {
  setStudentInfo(values: StudentInfo) {
    setStudentInfo(values);
  }

  getStudentTypeInfo(): StudentInfo | undefined {
    if (getStudentInfo().studentType === "Undergraduate") {
      return new UndergraduateStudent(getStudentInfo());
    } else {
      return new PostgraduateStudent(getStudentInfo());
    }
  }
}
