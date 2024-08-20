export class Interface {
  id?: string;
  definition: string;
  origin: string;
  whyDescription: string;
  pro: string;
  con: string;

  whatdesc: string;
  specGenral: string;
  collGenral: string;
  learnGenral: string;
  whatifdesc:string;

   howdesc:string;
  specdesc:string;
   colldesc:string;
   learndesc:string;
}

//
export interface Post {
  id: string;
  title: string;
  content: string;
  imageName: string;
  fileName: string;
  createdAt: string;
  updatedAt: string;
  nbViews: number;
  author: string;
  comments: Comment[];
  reactions: React[];

  typePost :TypePost;
}

// src/app/models/comment.model.ts
export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  postId: string;
}

// src/app/models/react.model.ts
export interface React {
  id: string;
  typeReact: string;
  createdAt: string;
  postId: string;
  author: string;
}

/*
export interface Iteration {
  id: string;
  sprintName: string;
  sprintDescription: string;
  startDate: string;
  endDate: string;
  estimation: number;
  isCompleted: boolean;
  tasks: Task[];



}
*/

export enum TypePost {
  Forum = 'Forum',
  Idea = 'Idea',
  Issue = 'Issue',
  Retrospective = 'Retrospective'
}
