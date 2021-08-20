
import classes from './productView.module.css'
import Flex from '../../layout/flex/flexcontainer'
import Composition from '../../component/composition/composition'
import Item from '../../UI/item/item'
import MenuContainer from '../../component/menuContainer/menuContainer'
import ListITems from '../../component/listItems/listItems'
const ProductView = () => {
    return (
        <Flex>
            <Flex className={`${classes.product} ${classes.all}`}>
                product
            </Flex>
            <Flex className={`${classes.flexContainer}  ${classes.all}`} >
                <Composition>
                    <ListITems></ListITems>
                </Composition>
            </Flex>
            <Flex className={`${classes.menucontainer} ${classes.all}`}>
                <MenuContainer>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </MenuContainer>
            </Flex>
        </Flex>
    )
}

export default ProductView