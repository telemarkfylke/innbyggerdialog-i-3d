// Logos as base64
const logos =
  {
    vestfold: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MjAuNCAyNzIuODgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmNkMDA7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogI2U0MDAxNzsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGc+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Im0wLDB2MTUxLjQ5YzAsNCwuMiwxMC4xOS41OCwxNC4wOCw1Ljk3LDYwLjI0LDU2Ljk3LDEwNy4zLDExOC45OSwxMDcuM3MxMTMuMDItNDcuMDYsMTE4Ljk5LTEwNy4zYy4zOS0zLjkuNTktMTAuMDkuNTktMTQuMDhWMEgwWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTc3LjAxLDIxMy4wNnMyLjkzLTg2LjU3LDM4LjcxLTE1Mi43NmMtMTMuNDUsOC4xMi0yMy40LDExLjI2LTI5Ljc0LDE1LjMzLTMuNjQsMi41LTUuNTYsNS42Mi01LjU2LDEwLjAyLDAsNi43LDUuNjIsMTAuNTQsNi41MiwxMi40Ni40Mi44OS0uMzIsMy41OC0xLjc4LDcuNzQtMS4xLTkuMzktMTAuNTQtMTMuNi0xNy40MS0xMC44OC0xLjc3LjctOC40MiwzLjQ2LTkuMzUsMy44NC0uOTMuMzgtMS40OC44OS0xLjg0LDEuNzMtLjMzLjg1LS4zMSwxLjYuMDgsMi41My4zOS45MiwzLjE0LDcuNTgsMy45LDkuMzIsMi45NSw2LjgzLDEyLjgxLDEwLjU3LDIwLjI1LDQuNTQtLjk2LDIuNTQtMS45Niw1LjIxLTMuMDcsOC42NS01LjA0LDE1LjY4LTcuNzcsMjcuMzQtMTAuMjQsMzEuOTItMi40Nyw0LjU4LTcuOCw1LjkyLTExLjY2LDUuOTJoLTkuMTFjLTUuMTEsMC0xMi4zNi0zLjMyLTE0LjMtMTguNTQtMS42OC0xMy4yLTQuOC0zOC42My01LjYtNDUuMTgsNy4zOCw3LjQ5LDE3LjI2LDUuNDksMjIuOTktLjI1LDEuNTYtMS41Niw3LjM1LTcuNTcsOC4xNi04LjQuODEtLjgzLDEuMTYtMS42NCwxLjE2LTIuNjlzLS4zNS0xLjg2LTEuMTYtMi42OWMtLjgxLS44My02LjYxLTYuODQtOC4xNi04LjQtNi4wOS02LjExLTE2Ljg5LTcuOTctMjQuMzgsMS4yOS0uMjktNS4zNS44NC02LjY2LDQuOTgtOC45OSw0LjIzLTIuMzgsMTEuMi05LjE2LDcuMzMtMTkuODctMy40Ny05LjYxLTkuNzQtMTIuMzEtMTguMDgtMzMuOTQtOC4zNCwyMS42My0xNC42MSwyNC4zMy0xOC4wOCwzMy45NC0zLjg4LDEwLjcxLDMuMDksMTcuNDksNy4zMywxOS44Nyw0LjE0LDIuMzMsNS4yOCwzLjY1LDQuOTgsOC45OS03LjQ5LTkuMjYtMTguMjktNy40MS0yNC4zOC0xLjI5LTEuNTYsMS41Ni03LjM1LDcuNTctOC4xNiw4LjQtLjgxLjgzLTEuMTYsMS42NC0xLjE2LDIuNjlzLjM1LDEuODYsMS4xNiwyLjY5Yy44MS44Myw2LjYxLDYuODQsOC4xNiw4LjQsNS43Miw1Ljc1LDE1LjYsNy43NCwyMi45OS4yNS0uOCw2LjU1LTMuOTIsMzEuOTgtNS42LDQ1LjE4LTEuOTQsMTUuMjMtOS4xOSwxOC41NC0xNC4zLDE4LjU0aC05LjExYy0zLjg2LDAtOS4xOS0xLjM0LTExLjY2LTUuOTItMi40Ny00LjU4LTUuMi0xNi4yNC0xMC4yNC0zMS45Mi0xLjEtMy40My0yLjExLTYuMTEtMy4wNy04LjY1LDcuNDQsNi4wMywxNy4zLDIuMjksMjAuMjUtNC41NC43Ni0xLjc1LDMuNTEtOC40LDMuOS05LjMycy40MS0xLjY4LjA4LTIuNTNjLS4zNi0uODQtLjkyLTEuMzUtMS44NC0xLjczLS45My0uMzgtNy41OC0zLjE0LTkuMzUtMy44NC02Ljg3LTIuNzItMTYuMzEsMS40OS0xNy40MSwxMC44OC0xLjQ2LTQuMTctMi4yLTYuODUtMS43OC03Ljc0LjktMS45Miw2LjUyLTUuNzYsNi41Mi0xMi40NiwwLTQuNC0xLjkxLTcuNTItNS41Ni0xMC4wMi02LjM0LTQuMDctMTYuMjktNy4yMS0yOS43NC0xNS4zMywzNS43OCw2Ni4xOSwzOC43MSwxNTIuNzYsMzguNzEsMTUyLjc2aDExNC43MVoiLz4KICA8L2c+CiAgPGc+CiAgICA8cGF0aCBkPSJtMzQzLjIzLDEzNC41NGwtMjguMjItOTIuNzFjLS4wOS0uMTgtLjE0LS40Ni0uMTQtLjgzLDAtMS4yLjY5LTEuODEsMi4wOC0xLjgxaDE2LjEyYzEuMywwLDIuMTguNjUsMi42NCwxLjk1bDE4LjIxLDY3Yy4wOS4zNy4yOC41Ni41Ni41NnMuNDYtLjE4LjU2LS41NmwxNy45My02Ni44NmMuNDYtMS4zOSwxLjM0LTIuMDgsMi42NC0yLjA4aDE1LjcxYy44MywwLDEuNDQuMjYsMS44MS43Ni4zNy41MS40MiwxLjE0LjE0LDEuODhsLTI4LjYzLDkyLjcxYy0uNDYsMS4zLTEuMzQsMS45NS0yLjY0LDEuOTVoLTE2LjEyYy0xLjMsMC0yLjE4LS42NS0yLjY0LTEuOTVaIi8+CiAgICA8cGF0aCBkPSJtNDQzLjcyLDExNC42NmMuNTYtLjY1LDEuMTYtLjk3LDEuODEtLjk3LjU2LDAsMS4wNi4yMywxLjUzLjY5bDcuOTIsNy42NWMuNTYuNTYuODMsMS4xMS44MywxLjY3LDAsLjY1LS4xOSwxLjIxLS41NiwxLjY3LTMuMDYsMy44LTYuOTcsNi43OS0xMS43NSw4Ljk3LTQuNzcsMi4xOC05Ljk5LDMuMjctMTUuNjQsMy4yNy04LjUzLDAtMTUuNTktMi4xOC0yMS4yLTYuNTMtNS42MS00LjM1LTkuMzgtMTAuMzMtMTEuMzMtMTcuOTMtMS4xMS00LjA4LTEuNjctOC4zOS0xLjY3LTEyLjkzLDAtNS4zNy41MS05LjkxLDEuNTMtMTMuNjIsMS44NS02Ljg2LDUuNTgtMTIuMzcsMTEuMTktMTYuNTQsNS42MS00LjE3LDEyLjI1LTYuMjUsMTkuOTUtNi4yNSw5LjA4LDAsMTYuMjgsMi42OSwyMS42MSw4LjA2LDUuMzMsNS4zOCw4Ljc4LDEyLjkzLDEwLjM2LDIyLjY2LjM3LDMuMDYuNjUsNi40NC44MywxMC4xNSwwLDEuNTgtLjc5LDIuMzYtMi4zNiwyLjM2aC00Mi42N2MtLjU2LDAtLjgzLjI4LS44My44My4yOCwxLjk1LjYsMy4zOC45Nyw0LjMxLjkyLDIuODcsMi43Niw1LjA3LDUuNDksNi42LDIuNzMsMS41Myw2LjA1LDIuMjksOS45NCwyLjI5LDYuMTItLjI4LDEwLjc5LTIuNDEsMTQuMDQtNi4zOVptLTI1LjA5LTMxLjc2Yy0xLjk5LDEuNDQtMy4zNiwzLjQ1LTQuMSw2LjA1LS40NiwxLjc2LS43NCwyLjkyLS44MywzLjQ4LS4wOS41Ni4xNC44My43LjgzaDIzLjYzYy40NiwwLC43LS4xOC43LS41NiwwLTEuMDItLjE5LTIuMDktLjU2LTMuMi0uODMtMi42OS0yLjI3LTQuODItNC4zMS02LjM5LTIuMDQtMS41Ny00LjYzLTIuMzYtNy43OC0yLjM2LTIuOTcsMC01LjQ1LjcyLTcuNDQsMi4xNVoiLz4KICAgIDxwYXRoIGQ9Im00ODUuNTYsMTM0LjgyYy00LjYzLTEuNzYtOC4yLTQuMjItMTAuNy03LjM3LTIuNS0zLjE1LTMuNzUtNi43Mi0zLjc1LTEwLjd2LS42OWMwLTEuNTcuNzktMi4zNiwyLjM2LTIuMzZoMTQuMDRjMS41NywwLDIuMzYuMjgsMi4zNi44M3YuOTdjMCwyLjA0LDEuMTEsMy43OCwzLjM0LDUuMjEsMi4yMiwxLjQ0LDUuMDUsMi4xNSw4LjQ4LDIuMTUsMy4xNSwwLDUuNy0uNiw3LjY0LTEuODEsMS45NS0xLjIsMi45Mi0yLjc4LDIuOTItNC43MywwLTEuNjctLjgzLTIuOTItMi41LTMuNzUtMS42Ny0uODMtNC40LTEuNzEtOC4yLTIuNjQtNC41NC0xLjItNy45Mi0yLjI3LTEwLjE1LTMuMi02LjAyLTIuMDQtMTAuOC00LjU0LTE0LjMyLTcuNTEtMy41Mi0yLjk2LTUuMjgtNy4yMy01LjI4LTEyLjc5LDAtNi44NiwyLjY5LTEyLjMsOC4wNi0xNi4zMyw1LjM3LTQuMDMsMTIuNDItNi4wNSwyMS4xMy02LjA1LDUuOTMsMCwxMS4xNC45NSwxNS42NCwyLjg1LDQuNDksMS45LDcuOTcsNC41NywxMC40Miw3Ljk5LDIuNDUsMy40MywzLjY4LDcuMzIsMy42OCwxMS42OCwwLC40Ni0uMjEuODYtLjYyLDEuMTgtLjQyLjMzLTEsLjQ5LTEuNzQuNDloLTEzLjYyYy0xLjU4LDAtMi4zNi0uMjgtMi4zNi0uODN2LS44M2MwLTIuMDQtMS4wMi0zLjc1LTMuMDYtNS4xNC0yLjA0LTEuMzktNC43Ny0yLjA4LTguMi0yLjA4LTMuMDYsMC01LjU4LjU2LTcuNTgsMS42Ny0xLjk5LDEuMTEtMi45OSwyLjY0LTIuOTksNC41OXMuOTUsMy4yNSwyLjg1LDQuMTdjMS45LjkzLDUuMDMsMS45LDkuMzgsMi45MiwyLjY5LjU2LDUuMjgsMS4yNSw3Ljc4LDIuMDgsNi42NywxLjk1LDExLjkxLDQuNDUsMTUuNzEsNy41MSwzLjgsMy4wNiw1LjcsNy41MSw1LjcsMTMuMzQsMCw2Ljg2LTIuNzMsMTIuMjEtOC4yLDE2LjA1LTUuNDcsMy44NS0xMi43OSw1Ljc3LTIxLjk2LDUuNzctNi4yMSwwLTExLjYzLS44OC0xNi4yNi0yLjY0WiIvPgogICAgPHBhdGggZD0ibTU4MS4wNSw4MC43NWgtMTIuNTFjLS41NiwwLS44My4yOC0uODMuODN2MjguNzdjMCwzLjA2LjYyLDUuMzEsMS44OCw2Ljc0LDEuMjUsMS40NCwzLjI3LDIuMTUsNi4wNSwyLjE1aDMuODljMS41OCwwLDIuMzYuNzksMi4zNiwyLjM2djExLjk1YzAsMS40OC0uNzksMi4zMi0yLjM2LDIuNS0zLjUyLjE5LTYuMDcuMjgtNy42NC4yOC03LjY5LDAtMTMuNDQtMS4zLTE3LjI0LTMuODktMy44LTIuNTktNS43NS03LjQxLTUuODQtMTQuNDZ2LTM2LjQyYzAtLjU2LS4yOC0uODMtLjgzLS44M2gtNy4wOWMtMS41OCwwLTIuMzYtLjc5LTIuMzYtMi4zNnYtMTAuOThjMC0xLjU3Ljc5LTIuMzYsMi4zNi0yLjM2aDcuMDljLjU2LDAsLjgzLS4yOC44My0uODN2LTE1LjcxYzAtMS41Ny43OS0yLjM2LDIuMzYtMi4zNmgxNC4xOGMxLjU3LDAsMi4zNi43OSwyLjM2LDIuMzZ2MTUuNzFjMCwuNTYuMjguODMuODMuODNoMTIuNTFjMS41NywwLDIuMzYuNzksMi4zNiwyLjM2djEwLjk4YzAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZaIi8+CiAgICA8cGF0aCBkPSJtNjM5LjcxLDY3LjI2djExLjgxYzAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTEyLjY1Yy0uNTYsMC0uODMuMjgtLjgzLjgzdjUxLjg1YzAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTE0Ljg3Yy0xLjU4LDAtMi4zNi0uNzktMi4zNi0yLjM2di01MS44NWMwLS41Ni0uMjgtLjgzLS44My0uODNoLTcuMzdjLTEuNTgsMC0yLjM2LS43OS0yLjM2LTIuMzZ2LTExLjgxYzAtMS41Ny43OS0yLjM2LDIuMzYtMi4zNmg3LjM3Yy41NiwwLC44My0uMjguODMtLjgzdi0yLjkyYzAtNS43NC44OC0xMC4yMiwyLjY0LTEzLjQxLDEuNzYtMy4yLDQuNjEtNS40Nyw4LjU1LTYuODEsMy45NC0xLjM0LDkuMzgtMS45MiwxNi4zMy0xLjc0aDQuNTljMS41NywwLDIuMzYuNzksMi4zNiwyLjM2djkuODdjMCwxLjU4LS43OSwyLjM2LTIuMzYsMi4zNmgtMy44OWMtMy4yNC4wOS01LjQ5Ljc2LTYuNzQsMi4wMnMtMS44OCwzLjU0LTEuODgsNi44OHYxLjM5YzAsLjU2LjI4LjgzLjgzLjgzaDEyLjY1YzEuNTgsMCwyLjM2Ljc5LDIuMzYsMi4zNloiLz4KICAgIDxwYXRoIGQ9Im02NTguNjEsMTMxLjQ4Yy01LjU2LTQuMDgtOS4zNi05LjY0LTExLjQtMTYuNjgtMS4zLTQuMzUtMS45NS05LjA4LTEuOTUtMTQuMTgsMC01LjY1LjctMTAuNTYsMi4wOC0xNC43MywyLjEzLTYuODYsNS45NS0xMi4yMywxMS40Ny0xNi4xMiw1LjUxLTMuODksMTIuMjEtNS44NCwyMC4wOC01Ljg0czE0LjExLDEuOTUsMTkuNTMsNS44NGM1LjQyLDMuODksOS4yLDkuMjIsMTEuMzMsMTUuOTgsMS4zOSw0LjI2LDIuMDgsOS4xMywyLjA4LDE0LjYsMCw0LjgyLS42LDkuNS0xLjgxLDE0LjA0LTIuMTMsNy4yMy01Ljk2LDEyLjktMTEuNDcsMTcuMDMtNS41MSw0LjEyLTEyLjEyLDYuMTktMTkuODEsNi4xOXMtMTQuNTktMi4wNC0yMC4xNi02LjEyWm0yNy44LTEzLjQ4YzIuMTMtMS44NSwzLjY2LTQuNCw0LjU5LTcuNjQuNzQtMi41LDEuMTEtNS43NSwxLjExLTkuNzNzLS4zNy03LjE4LTEuMTEtOS44N2MtLjkzLTMuMTUtMi40Ni01LjYxLTQuNTktNy4zNy0yLjEzLTEuNzYtNC43Ny0yLjY0LTcuOTItMi42NHMtNS42NS44OC03Ljc4LDIuNjRjLTIuMTMsMS43Ni0zLjY2LDQuMjItNC41OSw3LjM3LS43NCwyLjY5LTEuMTEsNS45OC0xLjExLDkuODdzLjM3LDcuMDQsMS4xMSw5LjczYy45MiwzLjI0LDIuNDgsNS43OSw0LjY2LDcuNjQsMi4xOCwxLjg1LDQuODQsMi43OCw3Ljk5LDIuNzgsMi45NiwwLDUuNTEtLjkzLDcuNjUtMi43OFoiLz4KICAgIDxwYXRoIGQ9Im03MjQuMDgsMTM0LjEyVjQxLjU1YzAtMS41Ny43OS0yLjM2LDIuMzYtMi4zNmgxNC44N2MxLjU3LDAsMi4zNi43OSwyLjM2LDIuMzZ2OTIuNTdjMCwxLjU4LS43OSwyLjM2LTIuMzYsMi4zNmgtMTQuODdjLTEuNTgsMC0yLjM2LS43OS0yLjM2LTIuMzZaIi8+CiAgICA8cGF0aCBkPSJtODAzLjE3LDM5LjE5aDE0Ljg3YzEuNTgsMCwyLjM2Ljc5LDIuMzYsMi4zNnY5Mi41N2MwLDEuNTgtLjc5LDIuMzYtMi4zNiwyLjM2aC0xNC44N2MtMS41OCwwLTIuMzYtLjc5LTIuMzYtMi4zNnYtMy43NWMwLS4zNy0uMTItLjU4LS4zNS0uNjMtLjIzLS4wNS0uNDQuMDctLjYzLjM1LTMuOCw1LTkuMDgsNy41MS0xNS44NCw3LjUxLTYuMywwLTExLjg4LTEuODgtMTYuNzUtNS42My00Ljg2LTMuNzUtOC4yMi04LjY5LTEwLjA4LTE0LjgtMS41OC00LjQ1LTIuMzYtMTAuMDEtMi4zNi0xNi42OHMuODgtMTIuNiwyLjY0LTE3LjI0YzIuMDQtNS45Myw1LjQtMTAuNjYsMTAuMDgtMTQuMTgsNC42OC0zLjUyLDEwLjE3LTUuMjgsMTYuNDctNS4yOCw2Ljg2LDAsMTIuMTQsMi4yNywxNS44NCw2LjgxLjE4LjI4LjM5LjM3LjYzLjI4LjIzLS4wOS4zNS0uMzIuMzUtLjd2LTI4LjYzYzAtMS41Ny43OS0yLjM2LDIuMzYtMi4zNlptLTIuNSw2MS41OGMwLTYuMTItLjk3LTEwLjg5LTIuOTItMTQuMzItMi4zMi0zLjYxLTUuNDItNS40Mi05LjMxLTUuNDItNC4yNiwwLTcuNTEsMS43Ni05LjczLDUuMjgtMi4yMiwzLjcxLTMuMzQsOC41Ny0zLjM0LDE0LjU5LDAsNS40Ny45NywxMC4wMSwyLjkyLDEzLjYyLDIuMjIsMy45OSw1LjYxLDUuOTgsMTAuMTUsNS45OCw0LjA4LDAsNy4yMy0xLjk5LDkuNDUtNS45OCwxLjg1LTMuNDMsMi43OC04LjAxLDIuNzgtMTMuNzZaIi8+CiAgPC9nPgogIDxnPgogICAgPHBhdGggZD0ibTMyNC4zOSwxODIuMTZsMjIuNjkuMDN2NC4yNXMtMTcuNTMtLjAyLTE3LjUzLS4wMnYxMS4xOXMxNi41LjAyLDE2LjUuMDJ2NC4yNXMtMTYuNTItLjAyLTE2LjUyLS4wMmwtLjAyLDE2LjAxaC01LjE3cy4wNC0zNS43Mi4wNC0zNS43MloiLz4KICAgIDxwYXRoIGQ9Im0zNzQuMDYsMjAxLjI3bC0uMDIsMTYuNjdoLTUuMjJzLjAyLTE2LjY3LjAyLTE2LjY3bC0xNC4yMS0xOS4wNmg1Ljk4czEwLjg3LDE0Ljc2LDEwLjg3LDE0Ljc2bDEwLjkxLTE0LjczaDUuOTNzLTE0LjI2LDE5LjA0LTE0LjI2LDE5LjA0WiIvPgogICAgPHBhdGggZD0ibTM5Ny4wOCwxODIuMjVoNS4yMnMtLjA0LDMxLjM2LS4wNCwzMS4zNmwxNy4zMi4wMnY0LjM2cy0yMi41NS0uMDMtMjIuNTUtLjAzbC4wNC0zNS43MVoiLz4KICAgIDxwYXRoIGQ9Im00NTEuNzUsMjE4LjAzbC0xNy41Ni0xNi44NC0uMDIsMTYuODJoLTUuMjJzLjA0LTM1LjcyLjA0LTM1LjcyaDUuMjJzLS4wMiwxNi4yNy0uMDIsMTYuMjdsMTYuODQtMTYuMjRoNi40M3MtMTguMDUsMTcuMjYtMTguMDUsMTcuMjZsMTguODcsMTguNDZoLTYuNTRaIi8+CiAgICA8cGF0aCBkPSJtNDY3LjI5LDE4Mi4zM2wyMy4yLjAzdjQuMnMtMTguMDktLjAyLTE4LjA5LS4wMnYxMS4yNXMxNy4wNi4wMiwxNy4wNi4wMnY0LjI1cy0xNy4wOC0uMDItMTcuMDgtLjAydjExLjhzMTguMDcuMDIsMTguMDcuMDJ2NC4ycy0yMy4yMS0uMDMtMjMuMjEtLjAzbC4wNC0zNS43MVoiLz4KICAgIDxwYXRoIGQ9Im01MDYuNTMsMjE3LjM4Yy0yLjMxLS43NS00LjMtMS44NS01Ljk1LTMuM2wxLjg4LTMuODVjMS43NSwxLjQyLDMuNTcsMi40NCw1LjQ0LDMuMDcsMS44Ny42MywzLjk3Ljk0LDYuMzEuOTUsMi42NywwLDQuNzMtLjQ5LDYuMTgtMS40OSwxLjQ1LS45OSwyLjE4LTIuNCwyLjE4LTQuMjMsMC0xLjU1LS42Ny0yLjcxLTIuMDItMy40N3MtMy41MS0xLjQ4LTYuNDgtMi4xNmMtMi44NC0uNjEtNS4xNy0xLjMxLTYuOTktMi4wOC0xLjgyLS43OC0zLjI1LTEuODQtNC4yOC0zLjE3LTEuMDMtMS4zMy0xLjU0LTMuMDMtMS41NC01LjA5LDAtMi4wOS41NS0zLjkzLDEuNjUtNS41MiwxLjEtMS41OSwyLjY2LTIuODIsNC42OS0zLjcyLDIuMDMtLjg5LDQuMzgtMS4zNCw3LjA0LTEuMzMsMi41LDAsNC44NS4zOSw3LjA3LDEuMTUsMi4yMS43Niw0LjAyLDEuODUsNS40NCwzLjI3bC0xLjgzLDMuODVjLTEuNjUtMS4zNS0zLjM1LTIuMzYtNS4wOS0zLjAycy0zLjU5LS45OS01LjU1LS45OWMtMi41NywwLTQuNTguNTMtNi4wNSwxLjU5LTEuNDcsMS4wNi0yLjIxLDIuNTQtMi4yMSw0LjQzLDAsMS42Mi42NCwyLjg1LDEuOTIsMy42OCwxLjI4LjgzLDMuMzQsMS41OCw2LjE4LDIuMjYsMi45Ny42OCw1LjM4LDEuMzgsNy4yMSwyLjExLDEuODQuNzMsMy4zMSwxLjczLDQuNCwyLjk5LDEuMSwxLjI3LDEuNjQsMi45MiwxLjY0LDQuOTQsMCwyLjA2LS41NSwzLjg3LTEuNjUsNS40Mi0xLjEsMS41NS0yLjY3LDIuNzUtNC43MiwzLjU5LTIuMDQuODQtNC40NywxLjI2LTcuMjcsMS4yNi0yLjc3LDAtNS4zMS0uMzgtNy42Mi0xLjEyWiIvPgogICAgPHBhdGggZD0ibTU2Mi4zMywyMTguMTZsLTE3LjU2LTE2Ljg0LS4wMiwxNi44MmgtNS4yMnMuMDQtMzUuNzIuMDQtMzUuNzJoNS4yMnMtLjAyLDE2LjI3LS4wMiwxNi4yN2wxNi44NC0xNi4yNGg2LjQzcy0xOC4wNSwxNy4yNi0xOC4wNSwxNy4yNmwxOC44NywxOC40NmgtNi41NFoiLz4KICAgIDxwYXRoIGQ9Im01ODEuMjUsMjE2LjM2Yy0yLjQ4LTEuNDktNC4zOS0zLjYtNS43NC02LjM0LTEuMzUtMi43NC0yLjAyLTUuOTYtMi4wMS05LjY4LDAtMy43NS42Ny03LDIuMDEtOS43NSwxLjM0LTIuNzUsMy4yNi00Ljg2LDUuNzYtNi4zMiwyLjUtMS40Nyw1LjQ0LTIuMiw4LjgyLTIuMTksMy40MSwwLDYuMzYuNzQsOC44NiwyLjIxLDIuNSwxLjQ3LDQuNDEsMy41OCw1Ljc0LDYuMzQsMS4zMywyLjc1LDEuOTksNS45OSwxLjk5LDkuNywwLDMuNzItLjY4LDYuOTUtMi4wMSw5LjctMS4zNCwyLjc1LTMuMjYsNC44Ny01Ljc2LDYuMzUtMi41LDEuNDgtNS40NiwyLjIyLTguODcsMi4yMi0zLjM4LDAtNi4zMS0uNzUtOC43OS0yLjI0Wm0xNy4xNS01LjY1YzItMi40MywzLTUuODksMy0xMC4zOCwwLTQuNDktLjk4LTcuOTUtMi45NS0xMC4zNi0xLjk3LTIuNDItNC43Ny0zLjYzLTguMzgtMy42My0zLjU1LDAtNi4zMSwxLjItOC4yOSwzLjYxLTEuOTgsMi40MS0yLjk3LDUuODYtMi45OCwxMC4zNSwwLDQuNDkuOTgsNy45NSwyLjk1LDEwLjM5LDEuOTcsMi40Myw0LjczLDMuNjUsOC4yOCwzLjY2LDMuNTgsMCw2LjM3LTEuMjEsOC4zNi0zLjY0WiIvPgogICAgPHBhdGggZD0ibTY1MS42OCwxODIuNTZsLS4wNCwzNS43MWgtNC43MXMuMDgtMjUuODQuMDgtMjUuODRsLTEwLjY2LDIwLjFoLTMuNTVzLTEwLjY2LTE5Ljg3LTEwLjY2LTE5Ljg3bC4wMiwyNS41OGgtNC43MXMuMDQtMzUuNzIuMDQtMzUuNzJoNC4yMXMxMi45NCwyNC43NCwxMi45NCwyNC43NGwxMi45LTI0LjdoNC4xNVoiLz4KICAgIDxwYXRoIGQ9Im03MDAuMTUsMTgyLjYybC0uMDQsMzUuNzFoLTQuNzFzLjA4LTI1Ljg0LjA4LTI1Ljg0bC0xMC42NiwyMC4xaC0zLjU1cy0xMC42Ni0xOS44Ny0xMC42Ni0xOS44N2wuMDIsMjUuNThoLTQuNzFzLjA0LTM1LjcyLjA0LTM1LjcyaDQuMjFzMTIuOTQsMjQuNzQsMTIuOTQsMjQuNzRsMTIuOS0yNC43aDQuMTVaIi8+CiAgICA8cGF0aCBkPSJtNzE2LjU4LDIxNS4wNmMtMi40Ni0yLjQ3LTMuNjktNi4xLTMuNjgtMTAuOWwuMDMtMjEuNTNoNS4xN3MtLjAzLDIxLjg5LS4wMywyMS44OWMwLDMuMjguNzgsNS43NiwyLjM1LDcuNDUsMS41NywxLjY5LDMuOTEsMi41NCw3LjAxLDIuNTQsMy4wNywwLDUuNC0uODQsNi45OS0yLjUyLDEuNTktMS42OSwyLjM5LTQuMTcsMi4zOS03LjQ0bC4wMy0yMS44OGg1LjE3cy0uMDMsMjEuNTMtLjAzLDIxLjUzYzAsNC43Ni0xLjI1LDguMzgtMy43NCwxMC44Ni0yLjQ5LDIuNDgtNi4wOSwzLjcyLTEwLjgyLDMuNzEtNC43NiwwLTguMzctMS4yNC0xMC44NC0zLjcxWiIvPgogICAgPHBhdGggZD0ibTc4My43OCwxODIuNzJsLS4wNCwzNS43MWgtNHMtMjAuMzgtMjYuOTgtMjAuMzgtMjYuOThsLS4wMywyNi45NWgtNC45MXMuMDQtMzUuNzIuMDQtMzUuNzJoMy45NXMyMC40MywyNy4wMywyMC40MywyNy4wM2wuMDMtMjdoNC45MVoiLz4KICAgIDxwYXRoIGQ9Im03OTYuMjksMTgyLjc0bDIzLjIuMDN2NC4ycy0xOC4wOS0uMDItMTguMDktLjAydjExLjI1czE3LjA2LjAyLDE3LjA2LjAydjQuMjVzLTE3LjA4LS4wMi0xNy4wOC0uMDJ2MTEuOHMxOC4wNy4wMiwxOC4wNy4wMnY0LjJzLTIzLjIxLS4wMy0yMy4yMS0uMDNsLjA0LTM1LjcxWiIvPgogIDwvZz4KPC9zdmc+',
    telemark: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4OTcuNDQgMjczLjUiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmNkMDA7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTEuMiwxLjM3djE1MC4xMmMwLDQuMDIuMiwxMC4xMS41OCwxMy45NywyLjg4LDI5LjEsMTYuNDMsNTYuMDIsMzguMTYsNzUuOCwyMS44OCwxOS45MSw1MC4yNCwzMC44OCw3OS44NiwzMC44OHM1Ny45OC0xMC45Nyw3OS44Ni0zMC44OGMyMS43My0xOS43OCwzNS4yOS00Ni43LDM4LjE2LTc1LjguMzgtMy44NC41OC05LjkzLjU4LTEzLjk3VjEuMzdIMS4yWiIvPgogIDxnPgogICAgPHBhdGggZD0ibTAsMHYxNTEuNjNjMCw0LjA3LjIsMTAuMjIuNTgsMTQuMTEsMi45LDI5LjM5LDE2LjYsNTYuNTksMzguNTUsNzYuNTcsMjIuMSwyMC4xMSw1MC43NSwzMS4xOSw4MC42NywzMS4xOXM1OC41Ny0xMS4wOCw4MC42Ny0zMS4xOWMyMS45NS0xOS45OCwzNS42NC00Ny4xNywzOC41NS03Ni41Ny4zOS0zLjg4LjU5LTEwLjA0LjU5LTE0LjExVjBIMFptMjM1Ljg4LDE1MS42M2MwLDMuOTgtLjIsOS45OC0uNTcsMTMuNzQtMi44MSwyOC40Ny0xNi4wOCw1NC44Mi0zNy4zNSw3NC4xOC0xNy43NSwxNi4xNi0zOS44NywyNi4yOS02My40NCwyOS4yOS0xLjQ3LTIuOTYtMy43Mi01LjIyLTMuNzItNS4yMmgwcy0yMC4zMy0yMC4zNy0yMC4zMy0yMC4zN2MtMy41NS0zLjk4LTUuMTktOC4xMi01Ljk4LTExLjA1aDBjLS4xNC0uNTYtLjctLjMxLS43LjA2djM2LjQxYy0yMy4wOS0zLjE5LTQ0Ljc0LTEzLjI1LTYyLjE3LTI5LjEyLTIxLjI3LTE5LjM2LTM0LjUzLTQ1LjctMzcuMzUtNzQuMTctLjM3LTMuNzctLjU3LTkuNzctLjU3LTEzLjc0VjMuNzNoMjMyLjE2djE0Ny45MVoiLz4KICAgIDxwYXRoIGQ9Im0xMzUuNzcsMjQxLjgzYzAtNC44OS00Ljk2LTkuODYtNC45Ni05Ljg2aDBzLTE5LjI2LTE5LjI5LTE5LjI2LTE5LjI5Yy00LjEyLTQuMTMtNS43NS04LjY5LTYuMzgtMTEuODgtLjA4LS40My0uNy0uNC0uNzYuMDMtLjQsMi44LS42MSw1LjY0LS42MSw4LjUxbC4yMiwxNC4zOGMwLDQuODksNC45Niw5Ljg2LDQuOTYsOS44NmwxOS42NywxOS43MWMzLjAzLDMuMTcsNC44MSw2LjU1LDUuODYsOS4zNWgwYy41NCwxLjU4LDEuNDgsMS4xOSwxLjQ4LjQ1di0yLjQ1bC0uMjItMTguOGgwWiIvPgogICAgPHBhdGggZD0ibTE0Mi4yOCwxODIuNzdjLTMuOTIsMS41MS03LjU1LDMuODgtOS41NywxLjg2LS45OS0uOTktLjgyLTIuMjUtLjQtNC4wNywwLS4wMiwwLS4wMy4wMS0uMDUsMC0uMDIuMDEtLjA1LjAyLS4wNywwLDAsMC0uMDEsMC0uMDIuNDEtMS43MSwxLjE4LTMuNzQsMS42NC02LjIyLjkxLTQuOTIuMTUtMTAuNzQtNS4xNS0xNC45OS0uMjUtLjItLjYzLS4xOC0uODUuMDVsLS44NS44NWgwczAsMCwwLDBsLTUuNyw1LjcyYy03LjUyLDcuNTQtMTIuODUsMTYuODctMTUuNTYsMjYuOTgtLjIuNzQtLjI1LDEuNTEtLjEyLDIuMjYuNzgsNC4zNiw0Ljc4LDguMzksNC44Myw4LjQzbDE4LjYsMTguNjNjMi41OSwyLjkxLDQuMTcsNS44Niw1LjEzLDguMzIsMCwwLDAsMCwwLDAsLjU0LDEuNTksMS40OCwxLjE5LDEuNDguNDV2LTIyLjQ0YzAtNy40OSwyLjk3LTE0LjY4LDguMjYtMTkuOThsNi45MS02LjkyYy4xLS4xLjA4LS4yOC0uMDUtLjM0LTEuNzUtLjg2LTUuMDUuMTUtOC42MSwxLjU1WiIvPgogICAgPHBhdGggZD0ibTM0LjI2LDE3Ny45OXMuMDQtLjA0LjA2LS4wN2MyMy43NS0zMS4xLDcyLjQtMzYuOTYsOTMuNDItMjIuNjMuNTQuMzYsMi43LDEuODksNSw0LjEzaDBzMCwwLDAsMGMuMS4wOS4xOS4xOC4yOS4yOCw1Ljk4LDYsNC4zNywxNS4yOCwzLjc3LDIwLjM3LS4wMy4yOS4yNC41My41Mi40NiwyLjgyLS43MSwxMi42NC0zLjg3LDE1LjU3LS45M2gwczMuNTIsMy41MywzLjUyLDMuNTNsMS43NSwxLjc1Yy4yMi4yMi41OC4yMi44LDBsMjUuODUtMjUuOWMuMjItLjIyLjIyLS41OCwwLS44bC0xLjc1LTEuNzUtMy41Mi0zLjUzaDBjLTIuOTMtMi45NC4yMi0xMi43OC45Mi0xNS42LjA3LS4yOS0uMTYtLjU2LS40Ni0uNTMtNS4wOC42LTE0LjM0LDIuMjItMjAuMzMtMy43OC0uMDktLjEtLjE4LS4xOS0uMjgtLjI5LDAsMCwwLDAsMCwwaDBjLTEuMTgtMS4yLTEuMjYtMS4zOC0yLjMxLTIuNjEtMjcuNDEtMzIuMDItMTEuNzUtNzIuODgsMjEuMjItOTYuMzl0MCwwYzEuMDQtLjc1LDEuODctMi4zMS0uODEtMi40Ny0uMjUtLjAxLS44Ny0uMDEtLjk0LS4wMS03OS42OCwxLjE5LTE0NC4wNCw2NS42NS0xNDUuMiwxNDUuNDgsMCwuMDYtLjAyLjc2LjAxLDEuMDYuMTksMS41OSwxLjYsMS44MywyLjg4LjIxWiIvPgogICAgPHBvbHlnb24gcG9pbnRzPSIxODEuNDkgMTUwLjk1IDE4MS40OSAxNTAuOTUgMTgxLjQ4IDE1MC45NiAxODEuNDkgMTUwLjk1Ii8+CiAgICA8cGF0aCBkPSJtMTY0LjIyLDEzMi41OGMzLjMsMS42Niw2LjkxLDEuNzksMTAuMTQsMS4xOSwyLjQ3LS40Niw0LjUtMS4yNCw2LjItMS42NCwwLDAsLjAxLDAsLjAyLDAsLjAyLDAsLjA1LS4wMS4wNy0uMDIuMDIsMCwuMDMsMCwuMDUtLjAxLDEuODEtLjQzLDMuMDctLjU5LDQuMDYuNCwyLjAxLDIuMDItLjM1LDUuNjYtMS44Niw5LjU5LTEuMzksMy41OC0yLjQsNi44OS0xLjU0LDguNjQuMDYuMTIuMjMuMTQuMzMuMDRsMjYuNDQtMjYuNDljLjA3LS4wNy4xMi0uMTguMTItLjI4di0zLjljMC0uMTktLjE2LS4xNS0uMjItLjExLDAsMCwwLDAsMCwwLTQuMjIsMi43LTkuMiw0LjI2LTE0LjU0LDQuMjYtNS4zNywwLTkuNTktMS41OC0xMy44LTQuMy0uMDgtLjA1LS4xOC0uMDUtLjI2LDBsLTE1LjMxLDExLjU1Yy0uMzguMjktLjMyLjg2LjExLDEuMDhaIi8+CiAgPC9nPgogIDxnPgogICAgPHBhdGggZD0ibTM4NC40LDQ0LjM3djEyLjIzYzAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTI0LjA1Yy0uNTYsMC0uODMuMjgtLjgzLjgzdjc3LjE0YzAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTE0Ljg3Yy0xLjU4LDAtMi4zNi0uNzktMi4zNi0yLjM2VjU5Ljc5YzAtLjU2LS4yOC0uODMtLjgzLS44M2gtMjMuMzVjLTEuNTgsMC0yLjM2LS43OS0yLjM2LTIuMzZ2LTEyLjIzYzAtMS41OC43OS0yLjM2LDIuMzYtMi4zNmg2OC42N2MxLjU4LDAsMi4zNi43OSwyLjM2LDIuMzZaIi8+CiAgICA8cGF0aCBkPSJtNDM0LjU4LDExNy40OGMuNTYtLjY1LDEuMTYtLjk3LDEuODEtLjk3LjU2LDAsMS4wNi4yMywxLjUzLjY5bDcuOTIsNy42NGMuNTYuNTYuODMsMS4xMS44MywxLjY3LDAsLjY1LS4xOSwxLjIxLS41NiwxLjY3LTMuMDYsMy44LTYuOTcsNi43OS0xMS43NSw4Ljk3LTQuNzcsMi4xOC05Ljk5LDMuMjctMTUuNjQsMy4yNy04LjUzLDAtMTUuNTktMi4xOC0yMS4yLTYuNTMtNS42MS00LjM1LTkuMzgtMTAuMzMtMTEuMzMtMTcuOTMtMS4xMS00LjA4LTEuNjctOC4zOS0xLjY3LTEyLjkzLDAtNS4zNy41MS05LjkyLDEuNTMtMTMuNjIsMS44NS02Ljg2LDUuNTgtMTIuMzcsMTEuMTktMTYuNTQsNS42LTQuMTcsMTIuMjUtNi4yNSwxOS45NS02LjI1LDkuMDgsMCwxNi4yOCwyLjY5LDIxLjYxLDguMDYsNS4zMyw1LjM4LDguNzgsMTIuOTMsMTAuMzYsMjIuNjYuMzcsMy4wNi42NSw2LjQ0LjgzLDEwLjE1LDAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTQyLjY3Yy0uNTYsMC0uODMuMjgtLjgzLjgzLjI4LDEuOTUuNiwzLjM4Ljk3LDQuMzEuOTIsMi44NywyLjc2LDUuMDcsNS40OSw2LjYsMi43MywxLjUzLDYuMDUsMi4yOSw5Ljk0LDIuMjksNi4xMi0uMjgsMTAuNzktMi40MSwxNC4wNC02LjM5Wm0tMjUuMDktMzEuNzZjLTEuOTksMS40NC0zLjM2LDMuNDUtNC4xLDYuMDUtLjQ2LDEuNzYtLjc0LDIuOTItLjgzLDMuNDctLjA5LjU2LjE0LjgzLjcuODNoMjMuNjNjLjQ2LDAsLjctLjE4LjctLjU2LDAtMS4wMi0uMTktMi4wOC0uNTYtMy4yLS44My0yLjY5LTIuMjctNC44Mi00LjMxLTYuMzktMi4wNC0xLjU4LTQuNjMtMi4zNi03Ljc4LTIuMzYtMi45NywwLTUuNDUuNzItNy40NCwyLjE1WiIvPgogICAgPHBhdGggZD0ibTQ2NC40NiwxMzYuOTRWNDQuMzdjMC0xLjU4Ljc5LTIuMzYsMi4zNi0yLjM2aDE0Ljg3YzEuNTcsMCwyLjM2Ljc5LDIuMzYsMi4zNnY5Mi41N2MwLDEuNTgtLjc5LDIuMzYtMi4zNiwyLjM2aC0xNC44N2MtMS41OCwwLTIuMzYtLjc5LTIuMzYtMi4zNloiLz4KICAgIDxwYXRoIGQ9Im01NDkuMzksMTE3LjQ4Yy41Ni0uNjUsMS4xNi0uOTcsMS44MS0uOTcuNTYsMCwxLjA2LjIzLDEuNTMuNjlsNy45Miw3LjY0Yy41Ni41Ni44MywxLjExLjgzLDEuNjcsMCwuNjUtLjE5LDEuMjEtLjU2LDEuNjctMy4wNiwzLjgtNi45Nyw2Ljc5LTExLjc1LDguOTctNC43NywyLjE4LTkuOTksMy4yNy0xNS42NCwzLjI3LTguNTMsMC0xNS41OS0yLjE4LTIxLjItNi41My01LjYxLTQuMzUtOS4zOC0xMC4zMy0xMS4zMy0xNy45My0xLjExLTQuMDgtMS42Ny04LjM5LTEuNjctMTIuOTMsMC01LjM3LjUxLTkuOTIsMS41My0xMy42MiwxLjg1LTYuODYsNS41OC0xMi4zNywxMS4xOS0xNi41NCw1LjYxLTQuMTcsMTIuMjUtNi4yNSwxOS45NS02LjI1LDkuMDgsMCwxNi4yOCwyLjY5LDIxLjYxLDguMDYsNS4zMyw1LjM4LDguNzgsMTIuOTMsMTAuMzYsMjIuNjYuMzcsMy4wNi42NSw2LjQ0LjgzLDEwLjE1LDAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTQyLjY3Yy0uNTYsMC0uODMuMjgtLjgzLjgzLjI4LDEuOTUuNiwzLjM4Ljk3LDQuMzEuOTIsMi44NywyLjc2LDUuMDcsNS40OSw2LjYsMi43MywxLjUzLDYuMDUsMi4yOSw5Ljk0LDIuMjksNi4xMi0uMjgsMTAuNzktMi40MSwxNC4wNC02LjM5Wm0tMjUuMDktMzEuNzZjLTEuOTksMS40NC0zLjM2LDMuNDUtNC4xLDYuMDUtLjQ2LDEuNzYtLjc0LDIuOTItLjgzLDMuNDctLjA5LjU2LjE0LjgzLjcuODNoMjMuNjNjLjQ2LDAsLjctLjE4LjctLjU2LDAtMS4wMi0uMTktMi4wOC0uNTYtMy4yLS44My0yLjY5LTIuMjctNC44Mi00LjMxLTYuMzktMi4wNC0xLjU4LTQuNjMtMi4zNi03Ljc4LTIuMzYtMi45NywwLTUuNDUuNzItNy40NCwyLjE1WiIvPgogICAgPHBhdGggZD0ibTY3NS4xOCw3My4yOGM0LjA4LDQuMzYsNi4xMiwxMC40Nyw2LjEyLDE4LjM1djQ1LjMxYzAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTE0Ljg3Yy0xLjU4LDAtMi4zNi0uNzktMi4zNi0yLjM2di00MWMwLTMuOC0uOTctNi44MS0yLjkyLTkuMDQtMS45NS0yLjIyLTQuNTQtMy4zNC03Ljc4LTMuMzRzLTUuODksMS4xMS03LjkyLDMuMzRjLTIuMDQsMi4yMi0zLjA2LDUuMTktMy4wNiw4Ljl2NDEuMTRjMCwxLjU4LS43OSwyLjM2LTIuMzYsMi4zNmgtMTQuNzNjLTEuNTgsMC0yLjM2LS43OS0yLjM2LTIuMzZ2LTQxYzAtMy43MS0xLjAyLTYuNjktMy4wNi04Ljk3LTIuMDQtMi4yNy00LjY4LTMuNDEtNy45Mi0zLjQxLTIuOTcsMC01LjQ0Ljg4LTcuNDQsMi42NC0xLjk5LDEuNzYtMy4xNyw0LjIyLTMuNTQsNy4zN3Y0My4zN2MwLDEuNTgtLjc5LDIuMzYtMi4zNiwyLjM2aC0xNC44N2MtMS41OCwwLTIuMzYtLjc5LTIuMzYtMi4zNnYtNjYuNzJjMC0xLjU3Ljc5LTIuMzYsMi4zNi0yLjM2aDE0Ljg3YzEuNTcsMCwyLjM2Ljc5LDIuMzYsMi4zNnY0LjQ1YzAsLjM3LjEyLjYuMzUuNy4yMy4wOS40NC0uMDQuNjItLjQyLDMuOC01LjQ3LDkuNjQtOC4yLDE3LjUxLTguMiw0LjYzLDAsOC42Ni45NSwxMi4wOSwyLjg1LDMuNDMsMS45LDYuMDcsNC42Niw3LjkyLDguMjcuMDkuMzcuMjUuNTMuNDkuNDkuMjMtLjA0LjQ0LS4yMS42My0uNDksMi4xMy0zLjcxLDQuOTEtNi40OCw4LjM0LTguMzQsMy40My0xLjg1LDcuMzItMi43OCwxMS42OC0yLjc4LDcuMjMsMCwxMi44OCwyLjE4LDE2Ljk2LDYuNTNaIi8+CiAgICA8cGF0aCBkPSJtNzQxLjksNjkuODdjNC43MywyLjA4LDguNDEsNC45MywxMS4wNSw4LjU1LDIuNjQsMy42MSwzLjk2LDcuNjQsMy45NiwxMi4wOXY0Ni40MmMwLDEuNTgtLjc5LDIuMzYtMi4zNiwyLjM2aC0xNC44N2MtMS41OCwwLTIuMzYtLjc5LTIuMzYtMi4zNnYtMy4zNGMwLS4zNy0uMDktLjU4LS4yOC0uNjItLjE5LS4wNS0uNDIuMDctLjcuMzUtNC4yNiw0LjczLTEwLjYxLDcuMDktMTkuMDQsNy4wOS03LjE0LDAtMTIuODgtMS43Ni0xNy4yNC01LjI4LTQuMzYtMy41Mi02LjUzLTguNzEtNi41My0xNS41N3MyLjUtMTIuNjcsNy41LTE2LjYxYzUtMy45NCwxMi4xNC01LjkxLDIxLjQxLTUuOTFoMTQuMDRjLjU2LDAsLjgzLS4yOC44My0uODN2LTIuOTJjMC0zLjA2LS45NS01LjQ0LTIuODUtNy4xNi0xLjktMS43MS00LjY2LTIuNTctOC4yNy0yLjU3LTIuNzgsMC01LjA3LjQ2LTYuODgsMS4zOS0xLjgxLjkzLTMuMDQsMi4yMi0zLjY4LDMuODktLjU2LDEuMy0xLjQ4LDEuOS0yLjc4LDEuODFsLTE1LjQzLTEuOTVjLS43NC0uMDktMS4zMi0uMy0xLjc0LS42Mi0uNDItLjMyLS41OC0uNzYtLjQ5LTEuMzIuNDYtMy44LDIuMDYtNy4yMyw0Ljc5LTEwLjI5LDIuNzMtMy4wNiw2LjM1LTUuNDQsMTAuODQtNy4xNiw0LjQ5LTEuNzEsOS40Ny0yLjU3LDE0Ljk0LTIuNTcsNi4wMiwwLDExLjQsMS4wNCwxNi4xMiwzLjEzWm0tOC43Niw1Mi43NWMyLjc4LTIuMTMsNC4xNy00Ljg3LDQuMTctOC4ydi00Ljg3YzAtLjU2LS4yOC0uODMtLjgzLS44M2gtOS44N2MtNC4xNywwLTcuNDYuNzktOS44NywyLjM2LTIuNDEsMS41OC0zLjYxLDMuOC0zLjYxLDYuNjcsMCwyLjUuOSw0LjQ3LDIuNzEsNS45MSwxLjgxLDEuNDQsNC4xOSwyLjE1LDcuMTYsMi4xNSwzLjk4LDAsNy4zNy0xLjA2LDEwLjE1LTMuMloiLz4KICAgIDxwYXRoIGQ9Im04MTUuNTcsNjguNTVjMS4xMS41NiwxLjUzLDEuNTMsMS4yNSwyLjkybC0yLjY0LDE0LjU5Yy0uMDkuODMtLjM1LDEuMzQtLjc2LDEuNTMtLjQyLjE5LTEuMDkuMTktMi4wMiwwLTEuNDgtLjM3LTIuODMtLjU2LTQuMDMtLjU2LS42NSwwLTEuNzEuMDktMy4yLjI4LTMuMzQuMjgtNi4xNiwxLjUxLTguNDgsMy42OC0yLjMyLDIuMTgtMy40Nyw1LjA3LTMuNDcsOC42OXYzNy4yNWMwLDEuNTgtLjc5LDIuMzYtMi4zNiwyLjM2aC0xNC44N2MtMS41OCwwLTIuMzYtLjc5LTIuMzYtMi4zNnYtNjYuNzJjMC0xLjU3Ljc5LTIuMzYsMi4zNi0yLjM2aDE0Ljg3YzEuNTgsMCwyLjM2Ljc5LDIuMzYsMi4zNnY0LjMxYzAsLjM3LjA5LjYuMjguNy4xOC4wOS40MiwwLC42OS0uMjgsMy43MS01LjM3LDguNzEtOC4wNiwxNS4wMS04LjA2LDIuOTYsMCw1LjQyLjU2LDcuMzcsMS42N1oiLz4KICAgIDxwYXRoIGQ9Im04MjcuOTQsMTM2Ljk0VjQ0LjM3YzAtMS41OC43OS0yLjM2LDIuMzYtMi4zNmgxNC44N2MxLjU4LDAsMi4zNi43OSwyLjM2LDIuMzZ2NDUuODdjMCwuMzcuMTIuNTguMzUuNjMuMjMuMDUuNDQtLjA3LjYyLS4zNWwxOC40OS0yMS4yN2MuOTItLjkzLDEuOS0xLjM5LDIuOTItMS4zOWgxNi44MmMuNjUsMCwxLjE2LjEyLDEuNTMuMzUuMzcuMjMuNTYuNTguNTYsMS4wNCwwLC41Ni0uMTksMS4wNy0uNTYsMS41M2wtMTcuMSwyMS40MWMtLjI4LjI4LS4zMy42NS0uMTQsMS4xMWwyMC40Myw0My4yMy4yOCwxLjExYzAsMS4xMS0uNywxLjY3LTIuMDgsMS42N2gtMTUuNzFjLTEuMywwLTIuMjItLjYtMi43OC0xLjgxbC0xMy40OC0zMS44M2MtLjI4LS41Ni0uNjUtLjYtMS4xMS0uMTRsLTguNjIsMTAuOThjLS4yOC4zNy0uNDIuNjktLjQyLjk3djE5LjQ2YzAsMS41OC0uNzksMi4zNi0yLjM2LDIuMzZoLTE0Ljg3Yy0xLjU4LDAtMi4zNi0uNzktMi4zNi0yLjM2WiIvPgogIDwvZz4KICA8Zz4KICAgIDxwYXRoIGQ9Im0zMjIuNDMsMTg0LjE0bDI2LjM2LjAzdjQuOTRzLTIwLjM2LS4wMy0yMC4zNi0uMDNsLS4wMiwxMywxOS4xOC4wMnY0Ljk0cy0xOS4xOC0uMDItMTkuMTgtLjAybC0uMDIsMTguNTloLTZzLjA1LTQxLjQ4LjA1LTQxLjQ4WiIvPgogICAgPHBhdGggZD0ibTM4MC4xMiwyMDYuMzRsLS4wMiwxOS4zNmgtNi4wNnMuMDItMTkuMzYuMDItMTkuMzZsLTE2LjUxLTIyLjE0aDYuOTRzMTIuNjMsMTcuMTQsMTIuNjMsMTcuMTRsMTIuNjctMTcuMWg2Ljg4cy0xNi41NiwyMi4xMS0xNi41NiwyMi4xMVoiLz4KICAgIDxwYXRoIGQ9Im00MDYuODUsMTg0LjI1aDYuMDZzLS4wNCwzNi40Mi0uMDQsMzYuNDJsMjAuMTIuMDJ2NS4wNnMtMjYuMTktLjAzLTI2LjE5LS4wM2wuMDUtNDEuNDhaIi8+CiAgICA8cGF0aCBkPSJtNDcwLjM0LDIyNS44bC0yMC4zOS0xOS41Ni0uMDIsMTkuNTNoLTYuMDZzLjA1LTQxLjQ4LjA1LTQxLjQ4aDYuMDZzLS4wMiwxOC44OS0uMDIsMTguODlsMTkuNTUtMTguODZoNy40N3MtMjAuOTcsMjAuMDQtMjAuOTcsMjAuMDRsMjEuOTIsMjEuNDRoLTcuNTlaIi8+CiAgICA8cGF0aCBkPSJtNDg4LjM5LDE4NC4zNWwyNi45NC4wM3Y0Ljg4cy0yMS4wMS0uMDMtMjEuMDEtLjAzbC0uMDIsMTMuMDYsMTkuODMuMDJ2NC45NHMtMTkuODMtLjAyLTE5LjgzLS4wMmwtLjAyLDEzLjcxLDIxLC4wM3Y0Ljg4cy0yNi45NS0uMDMtMjYuOTUtLjAzbC4wNS00MS40OFoiLz4KICAgIDxwYXRoIGQ9Im01MzMuOTYsMjI1LjA2Yy0yLjY5LS44Ny00Ljk5LTIuMTQtNi45MS0zLjgzbDIuMTgtNC40N2MyLjA0LDEuNjUsNC4xNCwyLjg0LDYuMzIsMy41NywyLjE4LjczLDQuNjIsMS4wOSw3LjMyLDEuMSwzLjEsMCw1LjQ5LS41Nyw3LjE4LTEuNzMsMS42OS0xLjE1LDIuNTMtMi43OSwyLjU0LTQuOTEsMC0xLjgtLjc4LTMuMTUtMi4zNS00LjAzLTEuNTctLjg4LTQuMDgtMS43Mi03LjUzLTIuNTEtMy4yOS0uNzEtNi0xLjUyLTguMTItMi40Mi0yLjEyLS45LTMuNzctMi4xMy00Ljk3LTMuNjgtMS4yLTEuNTUtMS43OS0zLjUyLTEuNzktNS45MiwwLTIuNDMuNjQtNC41NywxLjkyLTYuNDEsMS4yOC0xLjg0LDMuMDktMy4yOCw1LjQ1LTQuMzIsMi4zNS0xLjA0LDUuMDgtMS41NSw4LjE4LTEuNTUsMi45LDAsNS42NC40NSw4LjIxLDEuMzMsMi41Ny44OSw0LjY3LDIuMTUsNi4zMiwzLjhsLTIuMTIsNC40N2MtMS45Mi0xLjU3LTMuODktMi43NC01LjkxLTMuNTEtMi4wMi0uNzctNC4xNy0xLjE1LTYuNDQtMS4xNi0yLjk4LDAtNS4zMy42MS03LjAzLDEuODQtMS43MSwxLjIzLTIuNTYsMi45NS0yLjU2LDUuMTQsMCwxLjg4Ljc0LDMuMzEsMi4yMyw0LjI3LDEuNDkuOTYsMy44OCwxLjg0LDcuMTcsMi42MywzLjQ1Ljc5LDYuMjQsMS42MSw4LjM4LDIuNDUsMi4xNC44NSwzLjg0LDIsNS4xMiwzLjQ4LDEuMjcsMS40NywxLjkxLDMuMzgsMS45LDUuNzQsMCwyLjM5LS42NCw0LjQ5LTEuOTIsNi4yOS0xLjI4LDEuOC0zLjEsMy4xOS01LjQ4LDQuMTctMi4zOC45OC01LjE5LDEuNDYtOC40NCwxLjQ2LTMuMjIsMC02LjE3LS40NC04Ljg1LTEuM1oiLz4KICAgIDxwYXRoIGQ9Im01OTguNzYsMjI1Ljk2bC0yMC4zOS0xOS41Ni0uMDIsMTkuNTNoLTYuMDZzLjA1LTQxLjQ4LjA1LTQxLjQ4aDYuMDZzLS4wMiwxOC44OS0uMDIsMTguODlsMTkuNTUtMTguODZoNy40N3MtMjAuOTcsMjAuMDQtMjAuOTcsMjAuMDRsMjEuOTIsMjEuNDRoLTcuNTlaIi8+CiAgICA8cGF0aCBkPSJtNjIwLjc0LDIyMy44N2MtMi44OC0xLjczLTUuMS00LjE4LTYuNjctNy4zNi0xLjU3LTMuMTgtMi4zNC02LjkyLTIuMzQtMTEuMjQsMC00LjM1Ljc5LTguMTMsMi4zNC0xMS4zMiwxLjU1LTMuMTksMy43OC01LjY0LDYuNjktNy4zNSwyLjktMS43LDYuMzItMi41NSwxMC4yNC0yLjU1LDMuOTYsMCw3LjM5Ljg2LDEwLjI5LDIuNTcsMi45LDEuNzEsNS4xMiw0LjE3LDYuNjcsNy4zNiwxLjU0LDMuMiwyLjMxLDYuOTYsMi4zMSwxMS4yNywwLDQuMzItLjc4LDguMDctMi4zNCwxMS4yNi0xLjU1LDMuMi0zLjc4LDUuNjUtNi42OSw3LjM3LTIuOTEsMS43Mi02LjM0LDIuNTgtMTAuMywyLjU4LTMuOTIsMC03LjMyLS44Ny0xMC4yMS0yLjZabTE5LjkyLTYuNTZjMi4zMi0yLjgyLDMuNDgtNi44NCwzLjQ5LTEyLjA2LDAtNS4yMi0xLjE0LTkuMjMtMy40My0xMi4wNC0yLjI5LTIuODEtNS41NC00LjIxLTkuNzMtNC4yMi00LjEyLDAtNy4zMywxLjM5LTkuNjIsNC4yLTIuMywyLjgtMy40NSw2LjgxLTMuNDYsMTIuMDMsMCw1LjIyLDEuMTQsOS4yNCwzLjQzLDEyLjA2czUuNSw0LjI0LDkuNjEsNC4yNWM0LjE2LDAsNy4zOS0xLjQsOS43MS00LjIyWiIvPgogICAgPHBhdGggZD0ibTcwMi41MywxODQuNjFsLS4wNSw0MS40OGgtNS40N3MuMS0zMC4wMS4xLTMwLjAxbC0xMi4zOCwyMy4zNGgtNC4xMnMtMTIuMzgtMjMuMDgtMTIuMzgtMjMuMDhsLjAyLDI5LjcxaC01LjQ3cy4wNS00MS40OC4wNS00MS40OGg0Ljg4czE1LjAzLDI4LjczLDE1LjAzLDI4LjczbDE0Ljk4LTI4LjY5aDQuODJaIi8+CiAgICA8cGF0aCBkPSJtNzU4Ljg0LDE4NC42OGwtLjA1LDQxLjQ4aC01LjQ3cy4xLTMwLjAxLjEtMzAuMDFsLTEyLjM4LDIzLjM0aC00LjEycy0xMi4zOC0yMy4wOC0xMi4zOC0yMy4wOGwuMDIsMjkuNzFoLTUuNDdzLjA1LTQxLjQ4LjA1LTQxLjQ4aDQuODhzMTUuMDMsMjguNzMsMTUuMDMsMjguNzNsMTQuOTgtMjguNjloNC44MloiLz4KICAgIDxwYXRoIGQ9Im03NzcuOTEsMjIyLjM2Yy0yLjg2LTIuODctNC4yOS03LjA4LTQuMjgtMTIuNjVsLjAzLTI1aDZzLS4wMywyNS40Mi0uMDMsMjUuNDJjMCwzLjguOSw2LjY5LDIuNzMsOC42NSwxLjgyLDEuOTYsNC41NCwyLjk1LDguMTQsMi45NSwzLjU3LDAsNi4yOC0uOTcsOC4xMi0yLjkzLDEuODQtMS45NiwyLjc3LTQuODQsMi43Ny04LjY0bC4wMy0yNS40Mmg2cy0uMDMsMjUuMDEtLjAzLDI1LjAxYzAsNS41My0xLjQ1LDkuNzQtNC4zNCwxMi42MXMtNy4wNyw0LjMyLTEyLjU3LDQuMzFjLTUuNTMsMC05LjczLTEuNDQtMTIuNTgtNC4zMVoiLz4KICAgIDxwYXRoIGQ9Im04NTUuOTcsMTg0LjhsLS4wNSw0MS40OGgtNC42NXMtMjMuNjctMzEuMzMtMjMuNjctMzEuMzNsLS4wNCwzMS4zaC01Ljcxcy4wNS00MS40OC4wNS00MS40OGg0LjU5czIzLjczLDMxLjM5LDIzLjczLDMxLjM5bC4wNC0zMS4zNmg1LjcxWiIvPgogICAgPHBhdGggZD0ibTg3MC41LDE4NC44MmwyNi45NC4wM3Y0Ljg4cy0yMS4wMS0uMDMtMjEuMDEtLjAzbC0uMDIsMTMuMDYsMTkuODMuMDJ2NC45NHMtMTkuODMtLjAyLTE5LjgzLS4wMmwtLjAyLDEzLjcxLDIxLC4wM3Y0Ljg4cy0yNi45NS0uMDMtMjYuOTUtLjAzbC4wNS00MS40OFoiLz4KICA8L2c+Cjwvc3ZnPg=='
  }
module.exports = {
  logos
}
