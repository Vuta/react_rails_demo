class CreateOptions < ActiveRecord::Migration[5.0]
  def change
    create_table :options do |t|
    	t.references :question, foreign_key: true
    	t.boolean :is_right_choice
    	t.text :content
      t.timestamps
    end
  end
end
