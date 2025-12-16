Feature: HomePage Demo Access

    Background:
        Given User can access homepage demo qa site

    # Scenario Outline: Access Pages "<Menu>" from Homepage Demo QA Site
    #     When User click Menu "<Menu>"
    #     When User click SubMenu "<SubMenu>"
    #     Then User will see Page "<SubMenu>"
    #     Examples:
    #         | Menu     | SubMenu               |
    #         | Elements | Text Box              |
    #         | Elements | Check Box             |
    #         | Elements | Radio Button          |
    #         | Elements | Web Tables            |
    #         | Elements | Buttons               |
    #         | Elements | Links                 |
    #         | Elements | Broken Links - Images |
    #         | Elements | Upload and Download   |
    #         | Elements | Dynamic Properties    |

    # Scenario Outline: Text Box - Input Data and Verify
    #     When User click Menu "Elements"
    #     When User click SubMenu "Text Box"
    #     When User input "<FullName>" in Full Name field
    #     When User input "<Email>" in Email field
    #     When User input "<CurrentAddress>" in Current Address field
    #     When User input "<PermanentAddress>" in Permanent Address field
    #     When User click Submit button
    #     Then User will see Submitted data with "<FullName>" "<Email>" "<CurrentAddress>" "<PermanentAddress>"
    #     Examples:
    #         | FullName       | Email                     | CurrentAddress    | PermanentAddress  |
    #         | Pandu Wibisono | testing.pandu@testing.com | Jl.Salaman no.123 | Jl.Jabatan no.345 |

    # Scenario Outline: Check Box - Check Elements and Verify
    #     When User click Menu "Elements"
    #     When User click SubMenu "Check Box"
    #     When User expand all directory
    #     When User check the "Desktop" checkbox
    #     When User check the "React" checkbox
    #     When User check the "Word File.doc" checkbox
    #     Then User will see checkbox "You have selected :" with "<selected items>"
    #     Examples:
    #         | selected items                    |
    #         | desktopnotescommandsreactwordFile |

    Scenario Outline: Radio Button - Click Element and Verify
        When User click Menu "Elements"
        When User click SubMenu "Radio Button"
        When User click the "<RadioOption>" radio button
        Then User will see radio button "<RadioOption>"
        Examples:
            | RadioOption |
            | Yes         |
            | Impressive  |