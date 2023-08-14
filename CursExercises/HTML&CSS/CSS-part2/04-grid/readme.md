display: grid

    - grid-template-columns
        - auto
        - px
        - %
        - fr

    - grid-template-rows
        - auto
        - px
        - %
        - fr
    
    - gap 

    - grid-column-start
    - grid-column-end
    - grid-column
    - grid-row-start
    - grid-row-end
    - grid-row

    - grid-template-areas
    - grid-area


.grid-container {
    padding: 10px;
    background-color: #dedede;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}

--------

#grid-item1 {
    grid-column-start: 1;
    grid-column-end: 4;
}
#grid-item2 {
    grid-column: 1/2;
    grid-row: 2/4;
}
#grid-item3 {
    grid-row: 2/3;
}
#grid-item4 {
    grid-row: 2/3;
}
#grid-item5 {
    grid-column: 2/4;
}

--------

.grid-container {
    grid-template-areas: 
        "header header header header header"
        "menu main main right right"
        "menu footer footer footer footer"
}

#grid-item1 {
    grid-area: header
}
#grid-item2 {
    grid-area: menu
}
#grid-item3 {
    grid-area: main
}
#grid-item4 {
    grid-area: right
}
#grid-item5 {
    grid-area: footer
}