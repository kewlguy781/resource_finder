class Api::CategoriesController < ApplicationController
    # before_action :set_category
    
    def index
        render json: Category.all
    end

    def show
      render json: @category
    end
   
    private
    
    # def set_category
    #     @category = Category.find(params[:id])
    # end
    
    # def comment_params
    #     params.require(:category).permit(:name)
    # end
    
    
  
      

end
