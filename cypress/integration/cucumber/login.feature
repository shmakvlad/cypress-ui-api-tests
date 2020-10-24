Feature: Login to Account

    As a valid user
    I want to log into account

@focus
    Scenario: User can login into own account
        Given I open login page
            And I want to wait 2 seconds
        When I submit form with payload:
            """
            {
                "email": "ivan@gmail.com",
                "password": "vlad12-8"
            }
            """
        Then I see dashboard page with "ivan@gmail.com" data
            And I see "offers.staging3.affise.com" in the url


    Scenario Outline: User with correct data and diffrent roles can login into own account
        Given I open login page
        When I submit form with <role> and <payload>:
        Then I see dashboard page with <email> data
    Examples:
        | role  | payload                                                        | email           |
        | admin | { "email": "ivan@gmail.com", "password": "vlad12-8" }          | ivan@gmail.com  |
        | root  | { "email": "root@user.admin", "password": "Sd6rCCSGGdoIhL8m" } | root@user.admin |


    # This option doesn't correctly work, bug in cypress preprocessor
    Scenario Outline: User with correct data and diffrent roles can login into account
        Given I open login page
        When I submit form with <role> payload:
            """
            {
                "email": "<email>",
                "password": "<password>"
            }
            """
        Then I see dashboard page with "<email>" data
    Examples:
        | email           | password         | role  |
        | ivan@gmail.com  | vlad12-8         | admin |
        | root@user.admin | Sd6rCCSGGdoIhL8m | root  |
