exports.handler = async (event) => {
  const studentId = event.pathParameters.student_id;

  // Define a mapping of student IDs to advisor information
  const advisorMap = {
    "student123": {
      first_name: "Alice",
      last_name: "Wonderland",
      office_phone: "555-123-4567",
    },
    "student456": {
      first_name: "Bob",
      last_name: "The Builder",
      office_phone: "555-987-6543",
    },
    "student789": {
      first_name: "Charlie",
      last_name: "Chocolate",
      office_phone: "555-555-5555",
    },
  };

  // Get advisor information from the map based on student ID
  const advisor = advisorMap[studentId];

  // Return advisor information if found, otherwise return a 404 error
  if (advisor) {
    const response = {
      statusCode: 200,
      body: JSON.stringify(advisor),
    };
    return response;
  } else {
    const response = {
      statusCode: 404,
      body: JSON.stringify({ error: "Advisor not found" }),
    };
    return response;
  }
};
