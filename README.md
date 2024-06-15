Sure! Here's a comprehensive documentation for your API based on the provided code.

---

# Path Management API Documentation

## Overview

This API allows for the management of user paths, including the creation, retrieval, update, and deletion of paths. Each path contains a list of courses with associated grades and categories. Additionally, the API supports the generation of PDFs for paths.

## Base URL

`http://yourapiurl.com/api`

## Endpoints

### Get All Paths

**Endpoint:** `GET /paths`

**Description:** Retrieve all paths.

**Response:**
- `200 OK` - Returns an array of path objects.
- `500 Internal Server Error` - If an error occurs.

**Example Response:**
```json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "userId": "60d21b4667d0d8992e610c84",
    "courses": [
      {
        "courseId": "60d21b4667d0d8992e610c83",
        "grade": "9th",
        "courseCategory": "Science"
      }
    ],
    "createdOn": "2021-06-23T19:01:42.789Z",
    "updatedOn": "2021-06-23T19:01:42.789Z"
  }
]
```

### Get Path by ID

**Endpoint:** `GET /paths/:id`

**Description:** Retrieve a specific path by its ID.

**Parameters:**
- `id` (string) - Path ID.

**Response:**
- `200 OK` - Returns the path object.
- `404 Not Found` - If the path is not found.
- `500 Internal Server Error` - If an error occurs.

**Example Response:**
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "9th",
      "courseCategory": "Science"
    }
  ],
  "createdOn": "2021-06-23T19:01:42.789Z",
  "updatedOn": "2021-06-23T19:01:42.789Z"
}
```

### Get Paths by User ID

**Endpoint:** `GET /paths/user/:userId`

**Description:** Retrieve all paths for a specific user by their user ID.

**Parameters:**
- `userId` (string) - User ID.

**Response:**
- `200 OK` - Returns an array of path objects for the specified user.
- `404 Not Found` - If no paths are found for the user.
- `500 Internal Server Error` - If an error occurs.

**Example Response:**
```json
[
  {
    "_id": "60d21b4667d0d8992e610c85",
    "userId": "60d21b4667d0d8992e610c84",
    "courses": [
      {
        "courseId": "60d21b4667d0d8992e610c83",
        "grade": "9th",
        "courseCategory": "Science"
      }
    ],
    "createdOn": "2021-06-23T19:01:42.789Z",
    "updatedOn": "2021-06-23T19:01:42.789Z"
  }
]
```

### Add a New Path

**Endpoint:** `POST /paths`

**Description:** Add a new path.

**Request Body:**
```json
{
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "9th",
      "courseCategory": "Science"
    }
  ]
}
```

**Response:**
- `201 Created` - Returns the created path object.
- `400 Bad Request` - If the request body is invalid.
- `500 Internal Server Error` - If an error occurs.

**Example Response:**
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "9th",
      "courseCategory": "Science"
    }
  ],
  "createdOn": "2021-06-23T19:01:42.789Z",
  "updatedOn": "2021-06-23T19:01:42.789Z"
}
```

### Add a Course to an Existing Path

**Endpoint:** `POST /addpath/:id`

**Description:** Add a course to an existing path.

**Parameters:**
- `id` (string) - Path ID.

**Request Body:**
```json
{
  "courseId": "60d21b4667d0d8992e610c83",
  "grade": "9th",
  "courseCategory": "Science"
}
```

**Response:**
- `201 Created` - Returns the updated path object.
- `404 Not Found` - If the path is not found.
- `500 Internal Server Error` - If an error occurs.

**Example Response:**
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "9th",
      "courseCategory": "Science"
    }
  ],
  "createdOn": "2021-06-23T19:01:42.789Z",
  "updatedOn": "2021-06-23T19:01:42.789Z"
}
```

### Generate PDF for Paths

**Endpoint:** `GET /paths/pdf`

**Description:** Generate a PDF for paths.

**Response:**
- `200 OK` - Successfully generated the PDF.
- `500 Internal Server Error` - If an error occurs.

### Update an Existing Path

**Endpoint:** `PUT /paths/:id`

**Description:** Update an existing path by its ID.

**Parameters:**
- `id` (string) - Path ID.

**Request Body:**
```json
{
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "10th",
      "courseCategory": "Math"
    }
  ]
}
```

**Response:**
- `200 OK` - Returns the updated path object.
- `404 Not Found` - If the path is not found.
- `400 Bad Request` - If the request body is invalid.
- `500 Internal Server Error` - If an error occurs.

**Example Response:**
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "10th",
      "courseCategory": "Math"
    }
  ],
  "createdOn": "2021-06-23T19:01:42.789Z",
  "updatedOn": "2021-06-23T19:01:42.789Z"
}
```

### Delete a Path

**Endpoint:** `DELETE /paths/:id`

**Description:** Delete a path by its ID.

**Parameters:**
- `id` (string) - Path ID.

**Response:**
- `200 OK` - Successfully deleted the path.
- `404 Not Found` - If the path is not found.
- `500 Internal Server Error` - If an error occurs.

**Example Response:**
```json
{
  "message": "Path deleted successfully"
}
```

---

## Models

### Path

**Properties:**
- `_id` (ObjectId) - Unique identifier for the path.
- `userId` (ObjectId) - User ID associated with the path.
- `courses` (Array of Course) - List of courses.
- `createdOn` (Date) - Date when the path was created.
- `updatedOn` (Date) - Date when the path was last updated.

### Course

**Properties:**
- `courseId` (ObjectId) - Unique identifier for the course.
- `grade` (String) - Grade level of the course (e.g., "9th", "10th").
- `courseCategory` (String) - Category of the course.

---

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of an API request. The following are some of the status codes returned by the API:

- `200 OK` - The request was successful.
- `201 Created

` - A resource was successfully created.
- `400 Bad Request` - The request could not be understood or was missing required parameters.
- `404 Not Found` - The requested resource could not be found.
- `500 Internal Server Error` - An error occurred on the server.

---

## Example Usage

### Adding a New Path

**Request:**
```bash
curl -X POST http://yourapiurl.com/api/paths \
-H 'Content-Type: application/json' \
-d '{
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "9th",
      "courseCategory": "Science"
    }
  ]
}'
```

**Response:**
```json
{
  "_id": "60d21b4667d0d8992e610c85",
  "userId": "60d21b4667d0d8992e610c84",
  "courses": [
    {
      "courseId": "60d21b4667d0d8992e610c83",
      "grade": "9th",
      "courseCategory": "Science"
    }
  ],
  "createdOn": "2021-06-23T19:01:42.789Z",
  "updatedOn": "2021-06-23T19:01:42.789Z"
}
```

---

This documentation provides a detailed overview of the API, including its endpoints, request and response formats, models, and example usage. This should help developers integrate and use the API effectively.
