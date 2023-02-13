import { DocumentType, getModelForClass, ModelOptions, prop } from "@typegoose/typegoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
    toJSON: {
      transform: (doc: DocumentType<Student>, ret) => {
          delete ret.createdAt;
          delete ret.updatedAt;
          delete ret.__v;
          ret._id = ret._id;
          delete ret._id;
      }
  }
  },
})
export class Student {
  @prop({ type: String, lowercase: true, required: true })
  public name: string;

  @prop({ type: String, lowercase: true, required: true, unique: true })
  public id: string;

  @prop({ type: () => [String], lowercase: true, })
  public idCourse?: string[];
}



const StudentModel = getModelForClass(Student, );

export default StudentModel;
