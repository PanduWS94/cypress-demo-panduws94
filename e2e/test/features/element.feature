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