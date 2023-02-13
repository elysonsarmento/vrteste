import { z } from "zod";

 const name = z.object({
  name: z.string().nonempty({
    message: "name is required",
  }),   
});
 const listId = z.object({
    idCourse: z.optional(z.array(z.string())),   
});

export const createStudentchema = name.merge(listId);



export type createStudentType = z.infer<typeof createStudentchema>;
