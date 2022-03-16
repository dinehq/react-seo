import React from 'react'
import renderer from 'react-test-renderer'
import SEO from '../src'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

test('Link changes the class when hovered', () => {
  const component = renderer.create(<SEO title='http://antfu.me'></SEO>)

  let tree = toJson(component)
  expect(tree).toMatchSnapshot()
})
