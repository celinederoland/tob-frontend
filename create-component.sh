#!/usr/bin/env bash

for var in "$@"
do
   mkdir $var
   cd $var
done

touch $var.css
echo "import React from 'react'
import './$var.css'

class $var extends React.Component {
    render() {
        return (
            <div></div>
        );
    }
}

export default $var;" > $var.js