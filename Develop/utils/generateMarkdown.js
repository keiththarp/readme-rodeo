// function to generate markdown for README


function generateMarkdown(data) {
  const title = data.title;
  return `# ${title}

  ${data.description}
view deployed app at - ${data.deployedURL}

![${title} screen shot](${data.screenShot})

## Installation instructions
${data.installation}

## How to use ${title}
${data.usage}

Working and becoming more familiar with Jquery and Moment.JS. I also worked on passing values from function to function as arguments.

**How to contribute to ${title}**
${data.contribute}

**For testing**
${data.testing}

## ${title} was developed by:
- ${data.name}
Please reach out with questions at:
  - ${data.email}
Find more of ${data.name}'s work at:
  - https://github.com/${data.github}

**Acknowledgments and Credits**
${data.credits}

## ${title} is licensed under ${data.license}

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


  


  
  
  
  
  
  
  

`;
}

module.exports = generateMarkdown;
