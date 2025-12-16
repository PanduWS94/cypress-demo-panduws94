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