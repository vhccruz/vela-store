import ProductVariantSelectItem from './ProductVariantSelectItem'
import { compose, withState, withHandlers, withProps } from 'recompose'

const ProductVariantSelect = ({
  product,
  onSelect,
  selectedOptions,
  handleOptionSelect
}) =>
  product.options.map((option, i) => {
    return (
      <ProductVariantSelectItem
        name={option.name}
        values={
          getAvailableOptionValues(
            option.name,
            getAvailableVariants(
              product.variants,
              filterSelectedOptions(selectedOptions, product.options.slice(0, i))
            )
          )
        }
        selectedValue={selectedOptions[option.name]}
        onSelect={handleOptionSelect}
      />
    )
  })


const filterSelectedOptions = (selectedOptions, options) => {
  return options.reduce((obj, item) => {
    if (!selectedOptions[item.name]) return obj
    return (obj[item.name] = selectedOptions[item.name], obj)
  }, {})
}

const getAvailableVariants = (variants, selectedOptions) => {
  const availableEdges = variants.edges.filter(variant => {
    const variantOptions = variant.node.selectedOptions.reduce((obj,item) => {
      obj[item.name] = item.value
      return obj
    }, {});
    return Object.keys(selectedOptions).every(k => variantOptions[k] == selectedOptions[k])
  })
  return { edges: availableEdges }
}

const getAvailableOptionValues = (name, variants) => {
  const dupeValues = variants.edges.map(variant => variant.node.selectedOptions.find(option => option.name === name).value)
  return [...new Set(dupeValues)]
}

export default compose(
  withState('selectedOptions', 'setSelectedOptions', {}),
  withHandlers({
    handleOptionSelect: props => change => {
      const optionPos = props.product.options.findIndex(option => option.name === Object.keys(change)[0])
      const slicedOptions = props.product.options.slice(0, optionPos)
      const nextSelectedOptions = {
        ...filterSelectedOptions(props.selectedOptions, slicedOptions),
        ...change
      }

      return props.setSelectedOptions(nextSelectedOptions)
    }
  })
)(ProductVariantSelect)
