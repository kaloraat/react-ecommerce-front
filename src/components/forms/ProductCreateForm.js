import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
        >
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Color</label>
        <select name="color" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Brand</label>
        <select name="brand" className="form-control" onChange={handleChange}>
          <option>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {showSub && (
        <div>
          <label>Sub Categories</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;

/**
 * reusable form for create/update
 
  import React from 'react';
import { Button, Select } from 'antd';
const { Option } = Select;
 
const ProductCreateForm = ({
  handleClick,
  handleChange,
  formData,
  handleCategorySelect,
  showSubCat,
  setFormData,
  subCategories,
  categories,
}) => {
  //DE-STRUCTURE FORM DATA
  const {
    title,
    description,
    price,
    quantity,
 
    category,
    subCategory,
    color,
    colors,
    brand,
    brands,
    shipping,
  } = formData;
 
  const renderCategorySelectOption = categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.name}
    </option>
  ));
 
  const renderSubCategorySelectOption = subCategories.map((subCategory) => (
    <Option key={subCategory._id} value={subCategory._id}>
      {subCategory.name}
    </Option>
  ));
 
  return (
    <form>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          id='title'
          value={title}
          className='form-control'
          autoComplete='off'
          placeholder='Enter a product title'
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='description'>Description</label>
        <textarea
          className='form-control'
          id='description'
          name='description'
          rows='10'
          value={description}
          onChange={handleChange}
          placeholder='Enter product description'
        ></textarea>
      </div>
      <div className='form-row'>
        <div className='form-group col-md-6'>
          <label htmlFor='category'>Category</label>
          <select
            className='form-control'
            name='category'
            id='category'
            value={category}
            onChange={handleCategorySelect}
          >
            <option>Select Category</option>
            {renderCategorySelectOption}
          </select>
        </div>
      </div>
      {showSubCat && (
        <div className='form-row'>
          <div className='form-group col-md-12'>
            <label>Sub-categories</label>
            <Select
              mode='multiple'
              style={‌{ width: '100%' }}
              value={subCategory}
              onChange={(value) =>
                setFormData({ ...formData, subCategory: value })
              }
            >
              {subCategories.length > 0 && renderSubCategorySelectOption}
            </Select>
          </div>
        </div>
      )}
 
      <div className='form-row'>
        <div className='form-group col-md-4'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            name='price'
            id='price'
            value={price}
            className='form-control'
            autoComplete='off'
            placeholder='Enter product price'
            onChange={handleChange}
          />
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='quantity'>Quantity</label>
          <input
            type='number'
            name='quantity'
            id='quantity'
            value={quantity}
            className='form-control'
            autoComplete='off'
            placeholder='Enter quantity in stock'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group col-md-4'>
          <label htmlFor='shipping'>Shipping</label>
          <select
            className='form-control'
            name='shipping'
            id='shipping'
            value={shipping}
            onChange={handleChange}
          >
            <option>Select shipping option</option>
            <option value='Yes'>Yes</option>
            <option value='No'>No</option>
          </select>
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='color'>Color</label>
          <select
            className='form-control'
            name='color'
            value={color}
            id='color'
            onChange={handleChange}
          >
            <option>Select a color</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div className='form-group col-md-4'>
          <label htmlFor='brand'>Brand</label>
          <select
            className='form-control'
            name='brand'
            value={brand}
            id='brand'
            onChange={handleChange}
          >
            <option>Select a Brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button type='primary' onClick={handleClick}>
        Submit
      </Button>
    </form>
  );
};
 
export default ProductCreateForm;
 */
