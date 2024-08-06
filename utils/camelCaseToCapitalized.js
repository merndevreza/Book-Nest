export function camelCaseToCapitalized(text) {
   // Splitting the camelCase string into words using a regular expression
   const words = text.match(/[A-Za-z][a-z]*/g) || [];
   
   // Capitalize the first letter of each word and join them with a space
   const capitalizedText = words
     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
     .join(' ');
   
   return capitalizedText;
 }
  