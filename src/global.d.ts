/// <reference types="@sveltejs/kit" />

type Post = {
  title: string,
  date: string,
  language: string,
  link: string,
  tags: string[],
}

type Paper = {
  title: string,
  date: string,
  eventName: string,
  paperLink: string,
  eventLink: string,
  tags: string[],
}
