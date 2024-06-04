import pandas as pd
import requests
import json

# Read CSV file into a pandas DataFrame
csv_file = 'path/to/your/csv/file.csv'
df = pd.read_csv(csv_file)

# API endpoint for adding a course
add_course_api = 'http://localhost:3000/api/v1/courses/add'

# Iterate through each row in the DataFrame and send a POST request to add the course
for index, row in df.iterrows():
    # Transform row data into JSON format
    course_data = {
        "courseCode": row['course_code'],
        "name": row['course_desc'],
        "description": row['course_ldescr'],
        "attributes": {
            "availableCredits": row['available_course_credit_value'],
            "courseLevel": row['course_level_type'],
            "maxGPAWeight": row['max_gpa_weighted_value'],
            "courseLength": row['course_length'],
            "categoryType": row['course_cat_type'],
            "courseCategory": row['course_catname'],
            "courseSubCategory": row['course_subcat_name'],
            "createdOn": row['crdate'],
            "updatedOn": row['moddate'],
            "state": row['statecode'],
            "County": row['County'],
            "institution": row['institution']
        },
        "reviews": [],
        "faqs": [],
        "expiryDate": "d",
        "createdOn": row['crdate'],
        "updatedOn": row['moddate']
    }

    # Convert course_data to JSON string
    course_json = json.dumps(course_data)

    # Send POST request to add_course_api
    response = requests.post(add_course_api, json=course_json)

    # Check if the request was successful
    if response.status_code == 200:
        print(f"Course added successfully: {row['course_desc']}")
    else:
        print(f"Failed to add course: {row['course_desc']}")

