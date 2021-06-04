import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props =>
{
    const renderMealItem = itemData =>
    {

    }
    const catId = props.navigation.getParam('categoryId');
    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );
    return (
        <View style={styles.screen}>
            <FlatList keyExtractor={(item, index) => item.id} data={displayedMeals} renderItem={renderMealItem} style={{ width: '100%' }}></FlatList>
        </View >
    );
};

CategoryMealsScreen.navigationOptions = navigationData =>
{
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;