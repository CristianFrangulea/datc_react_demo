import React from 'react';

const Course = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-sm-7 border-right px-5 text-center">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="col-12 offset-sm-1 col-sm-3 border-start text-center text-sm-start">
                   <form>
                       <label>
                           Search course
                           <input type="text" className="form-control" />
                       </label>
                       <br />      
                       <button className="btn btn-outline-primary col-4 course-btn" onClick={(e) => e.preventDefault()}>Search</button>
                   </form>
                </div>  
            </div>
        </div>
    );
}

export default Course;
