import React, { useRef } from 'react';
import { Document, Page, pdf, Text } from '@react-pdf/renderer';

const Blog = () => {
  const ref = useRef();

  const generatePdf = () => {
    // Define the file name and page size
    const fileName = 'blog.pdf';
    const pageSize = 'A4';

    // Create a new PDF document
    const doc = (
      <Document title="Blog">
        <Page size={pageSize}>
          <Text>Assignment-10 Question Answer</Text>

          <br />
          <Text>1)Tell us the differences between uncontrolled and controlled components.</Text>
          <Text>Ans: The main difference between controlled and uncontrolled components in React is how they handle user input. In a controlled component, the value of the input field is controlled by React state. Whenever the user types something, the state is updated with the new value, which in turn updates the input field.</Text>

          <br />

          <Text>2) How to validate React props using PropTypes?</Text>
          <Text>Ans: To validate React props using PropTypes, you can use the prop-types package. After installing the package, you can define the propTypes for your component by creating a static object called propTypes on your component class and defining each prop with its respective type.</Text>

          <br />

          <Text>3)Tell us the difference between nodejs and express js.</Text>
          <Text>Ans: Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js. While Node.js provides the core functionality for server-side JavaScript applications, Express.js makes it easier to build web APIs and serve HTTP requests by providing a set of features and middleware out of the box.</Text>


          <br />

          <Text>4) What is a custom hook, and why will you create a custom hook?</Text>
          <Text>Ans: A custom hook is a function that abstracts away some complex logic or behavior into a reusable piece of code. Custom hooks are created just like regular React hooks, but they can be used across multiple components to share stateful or effectful logic.</Text>
        </Page>
        
        
      </Document>
    );

    // Convert the PDF document to a blob
    pdf(doc).toBlob().then(blob => {
      // Download the PDF file
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
    });
  };

  return (
    <div className="container-full bg-secondary pb-3 ">
     
      <div className="container  pt-2" ref={ref}>
        <h2 className="text-center text-white mt-5 ">
          Assignment-10 Question Answer
        </h2>
        <hr className="text-white" />
        <div className='text-end'>
        <button className='btn btn-primary'  onClick={generatePdf}>Download PDF</button>
        </div>
        

        <div className="card mb-3 mt-5 bg-dark text-white rounded">
          <div className="blog-body p-3 ">
            <h5 className="blog-title">1)Tell us the differences between uncontrolled and controlled components.

</h5>
            <p className="blog-text text-success">
              <strong>Ans: The main difference between controlled and uncontrolled components in React is how they handle user input. In a controlled component, the value of the input field is controlled by React state. Whenever the user types something, the state is updated with the new value, which in turn updates the input field. </strong> 
            </p>
          </div>
        </div>

        <div className="card mb-3 bg-dark text-white rounded">
          <div className="blog-body p-3">
            <h5 className="blog-title">2) How to validate React props using PropTypes?</h5>
            <p className="blog-text text-success">
              <strong>Ans: To validate React props using PropTypes, you can use the prop-types package. After installing the package, you can define the propTypes for your component by creating a static object called propTypes on your component class and defining each prop with its respective type. </strong> 
            </p>
          </div>
        </div>
        <div className="card mb-3 bg-dark text-white rounded">
          <div className="blog-body p-3">
            <h5 className="blog-title">3)Tell us the difference between nodejs and express js.</h5>
            <p className="blog-text text-success">
              <strong>Ans: Node.js is a runtime environment for executing JavaScript code outside of a web browser, while Express.js is a web application framework built on top of Node.js. While Node.js provides the core functionality for server-side JavaScript applications, Express.js makes it easier to build web APIs and serve HTTP requests by providing a set of features and middleware out of the box. </strong> 
            </p>
          </div>
        </div>
        <div className="card mb-2 bg-dark text-white rounded">
          <div className="blog-body p-3">
            <h5 className="blog-title">4) What is a custom hook, and why will you create a custom hook?</h5>
            <p className="blog-text text-success">
              <strong>Ans: A custom hook is a function that abstracts away some complex logic or behavior into a reusable piece of code. Custom hooks are created just like regular React hooks, but they can be used across multiple components to share stateful or effectful logic. </strong> 
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};


export default Blog