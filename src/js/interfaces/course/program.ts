import { ICourseState } from "../../interfaces/course";

export enum MediaType {
  VIDEO = 0,
  AUDIO = 1,
  DOCUMENT = 2,
  TEXT = 3,
  INTERACTIVE = 6,
}

export interface IProgramLectureCommon {
  lecture_quiz_id: number;
  section_id: number;
  title: string;
  description: string;
  contenttext: string;
  media: IMedia;
  media_type: 0 | 1 | 2 | 3 | 6;
  sort_order: number;
  publish: boolean;
  resources: number[];
  created_at: string;
  updated_at: string;
}

export interface IMedia {
  created_at: string;
  disable: number;
  id: number;
  library_id: number;
  slug: string;
  title: string;
  url?: string;
  video_type?: string;
  course_id: number;
  file_name?: string;
  file_title?: string;
  type:
    | "VIDEO"
    | "AUDIO"
    | "DOCUMENT"
    | "PRESENTATION"
    | "INTERACTIVE"
    | "TEXT";
  user_id: number;
}

export type IProgramLecture =
  | (IProgramLectureCommon & {
      media_type: 0; // VIDEO
      created_at: string;
      updated_at: string;
      video_title: string;
      video_name: string;
      video_type: "mp4" | "ogg";
      duration: string;
      image_name: string;
      video_tag: string;
      uploader_id: number;
      course_id: number;
      processed: number;
      file_name: string;
      file_title: string;
      file_type: string;
      file_extension: string;
      file_size: string;
      file_tag: string;
      id: number;
    })
  | (IProgramLectureCommon & {
      media_type: 1 | 2; // AUDIO | DOCUMENT
      file_name: string; // this is a link if `file_type === 'link'
      file_title: string;
      file_type: string; // mp3, pdf, link
      file_extension: string; // mp3, pdf, link
      file_size: string;
      duration: string;
      file_tag: "program" | "program_resource" | "program_resource_link";
      uploader_id: number;
      processed: boolean;
      created_at: string;
      updated_at: string;
    })
  | (IProgramLectureCommon & {
      media_type: 3; // TEXT
    })
  | (IProgramLectureCommon & {
      media_type: 6; // INTERACTIVE h5p, `media` is ID to element
    });

export interface IProgramData {
  list: IProgram[];
}

export interface IProgram {
  section_id: number;
  course_id: number;
  title: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
  lectures: IProgramLecture[];
}

export interface IProgramMenu {
  courseId: string;
  data: IProgramData;
  selectedSection?: number;
  selectedLecture?: number;
  allCompleted: number[];
}

export interface IProgramButton {
  active: boolean;
  lesson?: number;
  section?: number;
  courseId: string;
  loading: boolean;
  state: ICourseState;
}

export interface IProgramHeader {
  section?: string;
  lecture?: string;
  title?: string;
  loading: boolean;
}