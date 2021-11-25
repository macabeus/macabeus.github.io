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

type Talk = {
  title: string,
  date: string,
  language: string,
  eventName: string,
  videoLink: string,
  slidesLink: string,
  eventLink: string,
  previously?: Array<{
    name: string,
    link: string,
  }>,
  tags: string[],
}
