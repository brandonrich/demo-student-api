# Demo Student Information API

This repository contains a serverless API for retrieving student information, including advisor details, course schedules, and course information. The API is built using AWS Lambda and API Gateway, and it is defined using the AWS Serverless Application Model (SAM).

Its purpose is to test function calling from various AI chatbots, such as ChatGPT's custom actions in the GPT Builder.  The responses are hardcoded, but the data is consistent (ie a course on a student schedule has an equivalent entry in `/courses`).

One advanced test you can give the AI tool is "who teaches my first class?".  This prompt requires multiple steps to reach the correct answer: first, it must ask for a student ID, then make a call to get the schedule, then query the course list for the instructor name.

Student IDs are `student123`, `student345`, and `student678`.

## Features

- **Get Advisor Information**: Retrieve advisor details for a specific student.
- **Get Student Schedule**: Retrieve the schedule for a specific student.
- **Get All Courses**: Retrieve a list of all available courses.
- **Get Course by ID**: Retrieve details about a specific course.

## API Endpoints

- **GET /student/{student_id}/advisors**: Get advisor information for a student.
- **GET /student/{student_id}/schedule**: Get the student's schedule.
- **GET /courses**: Get all university courses.
- **GET /courses/{course_id}**: Get details about a specific course.

## Deployment

To deploy this SAM template, follow these steps:

1. **Install AWS SAM CLI**: Ensure you have the AWS SAM CLI installed. You can find installation instructions [here](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html).

2. **Clone the Repository**: Clone this repository to your local machine.

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

3. **Build the Project**: Use the SAM CLI to build the project.

   ```sh
   sam build
   ```

4. **Deploy the Project**: Deploy the project using the SAM CLI. This will package and deploy your application to AWS.

   ```sh
   sam deploy --guided
   ```

   Follow the prompts to provide the necessary information, such as the stack name, AWS region, and other parameters. The `samconfig.toml` file contains default deployment parameters that will be used.

5. **Access the Endpoints**: Once the deployment is complete, you can access the API endpoints using the URLs provided in the output of the deployment process.

## Configuration

The `template.yaml` file defines the AWS resources and API endpoints. The `samconfig.toml` file contains default deployment parameters.

## Example Requests

- **Get Advisor Information**:

  ```sh
  curl https://<api-url>/student/student123/advisors
  ```

- **Get Student Schedule**:

  ```sh
  curl https://<api-url>/student/student123/schedule
  ```

- **Get All Courses**:

  ```sh
  curl https://<api-url>/courses
  ```

- **Get Course by ID**:

  ```sh
  curl https://<api-url>/courses/CS101
  ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.