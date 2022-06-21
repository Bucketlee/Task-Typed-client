import Resource from "../models/resource";

export const data: Resource[] = [
  new Resource(`url-${Date.now()}-1`, 'url', 'https://www.robinwieruch.de/react-libraries/', 'https://www.robinwieruch.de/react-libraries/'),
  new Resource(`url-${Date.now()}-2`, 'url', 'https://typed.blog/how-to-write-a-better-research-paper-faster/', 'https://typed.blog/how-to-write-a-better-research-paper-faster/'),
];
