const router = require("express").Router();
const {createStudent,getAllStudents,updateStudent,deleteStudent,getByName} = require("../controllers/api_controller");

router.post("/",createStudent);
router.get("/",getAllStudents);
router.get("/:id",getAllStudents);
router.get("/search",getAllStudents);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports = router;