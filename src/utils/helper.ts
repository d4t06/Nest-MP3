export const convertToEn = (name: string): string => {
   const convert = (str: string) => {
     const newString = str
       .toLocaleLowerCase()
       .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ắ|ằ|ẳ|ẵ|ặ/g, 'a')
       .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
       .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
       .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ớ|ờ|ở|ỡ|ợ/g, 'o')
       .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
       .replace(/ỳ|ý|ý|ỷ|ỹ/g, 'y')
       .replace(/đ/g, 'd');
     return newString;
   };
   return convert(name).replaceAll(/[\W_]/g, '-');
 };