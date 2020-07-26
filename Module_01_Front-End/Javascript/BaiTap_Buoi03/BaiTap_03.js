// ======== Bài tập 3 ==========
/**
 * Bài 4: cho
 *      const object ={
 *          name: “nodemy”  
 *      }
 * Có gán lại được object = “ nodemy” được không? Vì sao?
 * Có gán lại được object.name = “YA” được không?Vì sao?
 */

const company = {
    name: 'nodemy'
}
// Câu 4.1: Có gán lại được object = “nodemy” được không? Vì sao?
/**
 * Câu trả lời: Không thể gán lại
 * Lý do: const là từ khóa dùng để khai báo hằng số, hằng số không
 * thể thay đổi giá trị trong quá trình thực thi chương trình.
 */

// Câu 4.2: Có gán lại được object.name = “YA” được không?Vì sao?
/**
 * Câu trả lời: Có thể gán lại
 * Lý do: name là thuộc tính. Thuộc tính có thể gán lại được giá trị mới
 */
company.name = 'YA';

console.log(company);