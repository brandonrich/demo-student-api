exports.handler = async (event) => {
  const studentId = event.pathParameters.student_id;

  const scheduleMap = {
    "student123": [
      { course_id: "CS101", course_name: "Introduction to Computer Science", time: "MWF 10:00 AM" },
      { course_id: "MATH201", course_name: "Calculus I", time: "TTH 1:00 PM" },
    ],
    "student456": [
      { course_id: "ENG101", course_name: "English Composition", time: "MWF 9:00 AM" },
      { course_id: "HIST101", course_name: "World History", time: "TTH 11:00 AM" },
    ],
    "student789": [
      { course_id: "PHYS101", course_name: "Physics I", time: "MWF 11:00 AM" },
      { course_id: "CHEM101", course_name: "Chemistry I", time: "TTH 2:00 PM" },
    ],
  };

  const schedule = scheduleMap[studentId];

  if (schedule) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(schedule),
    };
    return response;
  } else {
    const response = {
      statusCode: 404,
      body: JSON.stringify({ error: "Schedule not found" }),
    };
    return response;
  }
};
