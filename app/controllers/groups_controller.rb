class GroupsController < ApplicationController
  def new
    //例
    //@product = Product.find(params[:product_id])
    //@review = Review.new
  end

  def create
    //例
    //Review.create(create_params)
    //redirect_to controller: :products, action: :index
  end

  def edit
  end

  def update
  end

  private
  def params_group
    //params.require("group").permit(:name)
  end

end
