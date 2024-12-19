exports.handler = async (event) => {
  const courseId = event.pathParameters?.course_id;
  const path = event.requestContext?.resourcePath; // Get path from requestContext


  // Mock course data
  const courses = {
    "CS101": { 
      instructor_first_name: "Jane", 
      instructor_last_name: "Doe", 
      course_title: "Introduction to Computer Science", 
      course_description: "Fundamentals of programming and algorithms.", 
      credit_hours: 3 
    },
    "MATH201": { 
      instructor_first_name: "John", 
      instructor_last_name: "Smith", 
      course_title: "Calculus I", 
      course_description: "Limits, derivatives, and integrals.", 
      credit_hours: 4 
    },
    "ENG101": { 
      instructor_first_name: "Emily", 
      instructor_last_name: "Jones", 
      course_title: "English Composition", 
      course_description: "Writing effective essays and research papers.", 
      credit_hours: 3 
    },
    "HIST101": { 
      instructor_first_name: "David", 
      instructor_last_name: "Brown", 
      course_title: "World History", 
      course_description: "A survey of major world civilizations.", 
      credit_hours: 3 
    },
    "PHYS101": { 
      instructor_first_name: "Michael", 
      instructor_last_name: "Davis", 
      course_title: "Physics I", 
      course_description: "Mechanics, heat, and sound.", 
      credit_hours: 4 
    },
    "CHEM101": { 
      instructor_first_name: "Sarah", 
      instructor_last_name: "Wilson", 
      course_title: "Chemistry I", 
      course_description: "Basic principles of chemistry.", 
      credit_hours: 4 
    },
    // Add more courses here...
  };

  if (path.endsWith("/courses") && !courseId) {
    // Return all courses
    const response = {
      statusCode: 200,
      body: JSON.stringify(courses)
    };
    return response;
  } else if (path.endsWith("/courses/{course_id}") && courseId) {
    // Return specific course
    const course = courses[courseId];
    if (course) {
      const response = {
        statusCode: 200,
        body: JSON.stringify(course)
      };
      return response;
    } else {
      const response = {
        statusCode: 404,
        body: JSON.stringify({ error: "Course not found" })
      };
      return response;
    }
  } else {
    // Invalid request
    const response = {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request" })
    };
    return response;
  }
};
