import React from 'react'
import renderer from 'react-test-renderer'
import SEO from '../src'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  return result as renderer.ReactTestRendererJSON
}

test('create SEO component', () => {
  const component = renderer.create(
    <SEO title='title' description='description'></SEO>
  )

  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
