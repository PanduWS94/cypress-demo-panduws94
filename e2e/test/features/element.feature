Feature: HomePage Demo Access

    Background:
        Given User can access homepage demo qa site

    Scenario Outline: Access Pages "<Menu>" from Homepage Demo QA Site
        When User click Menu "<Menu>"
        When User click SubMenu "<SubMenu>"
        Then User will see Page "<SubMenu>"
        Examples:
            | Menu     | SubMenu               |
            | Elements | Text Box              |
            | Elements | Check Box             |
            | Elements | Radio Button          |
            | Elements | Web Tables            |
            | Elements | Buttons               |
            | Elements | Links                 |
            | Elements | Broken Links - Images |
            | Elements | Upload and Download   |
            | Elements | Dynamic Properties    |

    Scenario Outline: Text Box - Input Data and Verify
        When User click Menu "Elements"
        When User click SubMenu "Text Box"
        When User input "<FullName>" in Full Name field
        When User input "<Email>" in Email field
        When User input "<CurrentAddress>" in Current Address field
        When User input "<PermanentAddress>" in Permanent Address field
        When User click Submit button
        Then User will see Submitted data with "<FullName>" "<Email>" "<CurrentAddress>" "<PermanentAddress>"
        Examples:
            | FullName       | Email                     | CurrentAddress    | PermanentAddress  |
            | Pandu Wibisono | testing.pandu@testing.com | Jl.Salaman no.123 | Jl.Jabatan no.345 |

    Scenario Outline: Check Box - Check Elements and Verify
        When User click Menu "Elements"
        When User click SubMenu "Check Box"
        When User expand all directory
        When User check the "Desktop" checkbox
        When User check the "React" checkbox
        When User check the "Word File.doc" checkbox
        Then User will see checkbox "You have selected :" with "<selected items>"
        Examples:
            | selected items                    |
            | desktopnotescommandsreactwordFile |

    Scenario Outline: Radio Button - Click Element and Verify
        When User click Menu "Elements"
        When User click SubMenu "Radio Button"
        When User click the "<RadioOption>" radio button
        Then User will see radio button "<RadioOption>"
        Examples:
            | RadioOption |
            | Yes         |
            | Impressive  |

    Scenario Outline: Web Tables - Add New Record and Verify
        When User click Menu "Elements"
        When User click SubMenu "Web Tables"
        When User click Add button
        When User input "<FirstName>" in First Name field
        When User input "<LastName>" in Last Name field
        When User input "<Email>" in Email field
        When User input "<Age>" in Age field
        When User input "<Salary>" in Salary field
        When User input "<Department>" in Department field
        When User click Submit button
        Then User will see new record with "<FirstName>" "<LastName>" "<Email>" "<Age>" "<Salary>" "<Department>"
        Examples:
            | FirstName | LastName | Email                     | Age | Salary | Department |
            | Pandu     | Wibisono | testing.pandu@testing.com | 30  | 5000   | IT         |

    Scenario Outline: Web Tables - Edit Record and Verify
        When User click Menu "Elements"
        When User click SubMenu "Web Tables"
        When User click Edit button on record with "<SearchEmail>"
        When User input "<FirstName>" in First Name field
        When User input "<LastName>" in Last Name field
        When User input "<Email>" in Email field
        When User input "<Age>" in Age field
        When User input "<Salary>" in Salary field
        When User input "<Department>" in Department field
        When User click Submit button
        Then User will see updated record with "<FirstName>" "<LastName>" "<Email>" "<Age>" "<Salary>" "<Department>"
        Examples:
            | SearchEmail        | FirstName | LastName | Email                     | Age | Salary | Department |
            | cierra@example.com | Pandu     | Wibisono | testing.pandu@testing.com | 30  | 5000   | IT         |

    Scenario Outline: Web Tables - Delete Record and Verify
        When User click Menu "Elements"
        When User click SubMenu "Web Tables"
        When User click Delete button on record with "<SearchEmail>"
        Then User will not see record with "<SearchEmail>"
        Examples:
            | SearchEmail        |
            | cierra@example.com |

    Scenario Outline: Button - Click Button on Screen
        When User click Menu "Elements"
        When User click SubMenu "Buttons"
        When User click the "<ButtonType>" dynamic button
        Then User will see "<Message>" button clicked message
        Examples:
            | ButtonType      | Message                       |
            | Double Click Me | You have done a double click  |
            | Right Click Me  | You have done a right click   |
            | Click Me        | You have done a dynamic click |

    Scenario Outline: Links - Click Link and Verify Response
        When User click Menu "Elements"
        When User click SubMenu "Links"
        When User click the "<LinkType>" link
        Then User will see "<StatusMessage>" response
        Examples:
            | LinkType     | StatusMessage     |
            | Created      | Created           |
            | No Content   | No Content        |
            | Moved        | Moved Permanently |
            | Bad Request  | Bad Request       |
            | Unauthorized | Unauthorized      |
            | Forbidden    | Forbidden         |
            | Not Found    | Not Found         |
            | Home         |                   |

    Scenario Outline: Broken Links - Images
        When User click Menu "Elements"
        When User click SubMenu "Broken Links - Images"
        Then User will see "<imageSrc>" image
        Examples:
            | imageSrc              |
            | /images/Toolsqa.jpg   |
            | /images/Toolsqa_1.jpg |

    Scenario Outline: Upload and Download - Upload File and Verify
        When User click Menu "Elements"
        When User click SubMenu "Upload and Download"
        When User download file
        Then User will see downloaded file 'sampleFile.jpeg' in downloads folder
        When User upload file "ProfilPhoto.jpg"
        Then User will see uploaded file name "ProfilPhoto.jpg"

    Scenario Outline: Dynamic Properties - visibility test
        When User click Menu "Elements"
        When User click SubMenu "Dynamic Properties"
        Then User will see "<Properties>" "<Changes>" "<Verify>" button after 5 seconds
        Examples:
            | Properties              | Changes                          | Verify    |
            | Will enable 5 Seconds   | disabled                         | not exist |
            | Color Change            | mt-4 text-danger btn btn-primary | exist     |
            | Visible After 5 Seconds | Visible After 5 Seconds          | exist     |