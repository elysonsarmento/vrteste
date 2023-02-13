import { z } from "zod";

 const name = z.object({
  name: z.string().nonempty({
    message: "name is required",
  }),   
});
 const listId = z.object({
    idCourse: z.optional(z.array(z.string())),   
});

export const createCoursechema = name.merge(listId);



export type createCourseType = z.infer<typeof createCoursechema>;
