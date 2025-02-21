export default function sortPosts(a, b) {
   if (a.date > b.date) {
      return -1;
   } else {
      return 1;
   }
}
