import React from 'react';

const PlaceOrder = () => {
    const handleSubmit = () => {

    }
    const handleBlur = () => {

    }
    const handleFileChange = () => {

    }
    return (
        <section className="container-fluid row mt-5">
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Order</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Your name/ comapany name" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your email address" />
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Graphics design" />
                    </div>
                    <div className="form-group">
                        <textarea  onBlur={handleBlur} name="" className="form-control" id="" cols="30" rows="5" placeholder="Project Detail"></textarea>

                        {/* <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your email address" /> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default PlaceOrder;