
import classes from './productView.module.css'
import Flex from '../../layout/flex/flexcontainer'
import Composition from '../../component/composition/composition'
import Item from '../../UI/item/item'
import MenuContainer from '../../layout/menuContainer/menuContainer'
import ListITems from '../../component/listItems/listItems'
import image from '../../../assets/logo.png'
const ProductView = () => {
    return (
        <Flex>
            <Flex className={`${classes.product} ${classes.all}`}>
                <img src={image} alt="product" />
            </Flex>
            <Flex className={`${classes.flexContainer}  ${classes.all}`} >
                <Composition>
                    <ListITems></ListITems>
                </Composition>
            </Flex>
            <Flex className={`${classes.menucontainer} ${classes.all}`}>
                <MenuContainer title="people like this">
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