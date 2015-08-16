// This file was autogenerated by google/closure-library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../../Box2D/Box2D/Box2D.js', ['box2d'], ['box2d.b2AreaJoint', 'box2d.b2Body', 'box2d.b2BroadPhase', 'box2d.b2BuoyancyController', 'box2d.b2ChainShape', 'box2d.b2CircleShape', 'box2d.b2ConstantAccelController', 'box2d.b2ConstantForceController', 'box2d.b2Contact', 'box2d.b2DistanceJoint', 'box2d.b2Draw', 'box2d.b2DynamicTree', 'box2d.b2EdgeShape', 'box2d.b2Fixture', 'box2d.b2FrictionJoint', 'box2d.b2GearJoint', 'box2d.b2GravityController', 'box2d.b2MotorJoint', 'box2d.b2MouseJoint', 'box2d.b2Particle', 'box2d.b2ParticleGroup', 'box2d.b2ParticleSystem', 'box2d.b2PolygonShape', 'box2d.b2PrismaticJoint', 'box2d.b2PulleyJoint', 'box2d.b2RevoluteJoint', 'box2d.b2Rope', 'box2d.b2RopeJoint', 'box2d.b2Settings', 'box2d.b2ShapeDistance', 'box2d.b2StackQueue', 'box2d.b2TensorDampingController', 'box2d.b2TimeOfImpact', 'box2d.b2TimeStep', 'box2d.b2Timer', 'box2d.b2VoronoiDiagram', 'box2d.b2WeldJoint', 'box2d.b2WheelJoint', 'box2d.b2World', 'box2d.b2WorldCallbacks'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/Shapes/b2ChainShape.js', ['box2d.b2ChainShape'], ['box2d.b2EdgeShape', 'box2d.b2Shape'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/Shapes/b2CircleShape.js', ['box2d.b2CircleShape'], ['box2d.b2Shape'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/Shapes/b2EdgeShape.js', ['box2d.b2EdgeShape'], ['box2d.b2Shape'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/Shapes/b2PolygonShape.js', ['box2d.b2PolygonShape'], ['box2d.b2Shape'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/Shapes/b2Shape.js', ['box2d.b2Shape'], ['box2d.b2Math', 'box2d.b2Settings', 'box2d.b2ShapeDistance'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2BroadPhase.js', ['box2d.b2BroadPhase'], ['box2d.b2DynamicTree', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2CollideCircle.js', ['box2d.b2CollideCircle'], ['box2d.b2Collision'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2CollideEdge.js', ['box2d.b2CollideEdge'], ['box2d.b2Collision'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2CollidePolygon.js', ['box2d.b2CollidePolygon'], ['box2d.b2Collision'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2Collision.js', ['box2d.b2Collision'], ['box2d.b2Math', 'box2d.b2Settings', 'box2d.b2ShapeDistance'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2Distance.js', ['box2d.b2ShapeDistance'], ['box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2DynamicTree.js', ['box2d.b2DynamicTree'], ['box2d.b2Collision', 'box2d.b2GrowableStack', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Collision/b2TimeOfImpact.js', ['box2d.b2TimeOfImpact'], ['box2d.b2Math', 'box2d.b2Settings', 'box2d.b2ShapeDistance', 'box2d.b2Timer'], false);
goog.addDependency('../../../../Box2D/Box2D/Common/b2BlockAllocator.js', ['box2d.b2BlockAllocator'], [], false);
goog.addDependency('../../../../Box2D/Box2D/Common/b2Draw.js', ['box2d.b2Draw'], ['box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Common/b2GrowableStack.js', ['box2d.b2GrowableStack'], ['box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Common/b2Math.js', ['box2d.b2Math'], ['box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Common/b2Settings.js', ['box2d.b2Settings'], [], false);
goog.addDependency('../../../../Box2D/Box2D/Common/b2StackAllocator.js', ['box2d.b2StackAllocator'], [], false);
goog.addDependency('../../../../Box2D/Box2D/Common/b2Timer.js', ['box2d.b2Timer'], ['box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2ChainAndCircleContact.js', ['box2d.b2ChainAndCircleContact'], ['box2d.b2CollideEdge', 'box2d.b2Contact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2ChainAndPolygonContact.js', ['box2d.b2ChainAndPolygonContact'], ['box2d.b2ChainShape', 'box2d.b2CollideEdge', 'box2d.b2Contact', 'box2d.b2PolygonShape', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2CircleContact.js', ['box2d.b2CircleContact'], ['box2d.b2CollideCircle', 'box2d.b2Contact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2Contact.js', ['box2d.b2Contact'], ['box2d.b2Collision', 'box2d.b2Settings', 'box2d.b2TimeOfImpact'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2ContactFactory.js', ['box2d.b2ContactFactory'], ['box2d.b2Contact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2ContactSolver.js', ['box2d.b2ContactSolver'], ['box2d.b2ChainAndCircleContact', 'box2d.b2ChainAndPolygonContact', 'box2d.b2CircleContact', 'box2d.b2Collision', 'box2d.b2EdgeAndCircleContact', 'box2d.b2EdgeAndPolygonContact', 'box2d.b2Math', 'box2d.b2PolygonAndCircleContact', 'box2d.b2PolygonContact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2EdgeAndCircleContact.js', ['box2d.b2EdgeAndCircleContact'], ['box2d.b2CollideEdge', 'box2d.b2Contact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2EdgeAndPolygonContact.js', ['box2d.b2EdgeAndPolygonContact'], ['box2d.b2Contact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2PolygonAndCircleContact.js', ['box2d.b2PolygonAndCircleContact'], ['box2d.b2Contact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Contacts/b2PolygonContact.js', ['box2d.b2PolygonContact'], ['box2d.b2CollidePolygon', 'box2d.b2Contact', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2AreaJoint.js', ['box2d.b2AreaJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2DistanceJoint.js', ['box2d.b2DistanceJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2FrictionJoint.js', ['box2d.b2FrictionJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2GearJoint.js', ['box2d.b2GearJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2PrismaticJoint', 'box2d.b2RevoluteJoint', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2Joint.js', ['box2d.b2Joint'], ['box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2JointFactory.js', ['box2d.b2JointFactory'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2MotorJoint.js', ['box2d.b2MotorJoint'], ['box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2MouseJoint.js', ['box2d.b2MouseJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2PrismaticJoint.js', ['box2d.b2PrismaticJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2PulleyJoint.js', ['box2d.b2PulleyJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2RevoluteJoint.js', ['box2d.b2RevoluteJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2RopeJoint.js', ['box2d.b2RopeJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2WeldJoint.js', ['box2d.b2WeldJoint'], ['box2d.b2Joint', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/Joints/b2WheelJoint.js', ['box2d.b2WheelJoint'], ['box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/b2Body.js', ['box2d.b2Body'], ['box2d.b2Fixture', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/b2ContactManager.js', ['box2d.b2ContactManager'], ['box2d.b2BroadPhase', 'box2d.b2Collision', 'box2d.b2ContactFactory', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/b2Fixture.js', ['box2d.b2Fixture'], ['box2d.b2Collision', 'box2d.b2Settings', 'box2d.b2Shape'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/b2Island.js', ['box2d.b2Island'], ['box2d.b2ContactSolver', 'box2d.b2Settings', 'box2d.b2TimeStep', 'box2d.b2Timer', 'box2d.b2WorldCallbacks'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/b2TimeStep.js', ['box2d.b2TimeStep'], ['box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/b2World.js', ['box2d.b2World'], ['box2d.b2Body', 'box2d.b2Collision', 'box2d.b2ContactManager', 'box2d.b2ContactSolver', 'box2d.b2Draw', 'box2d.b2Island', 'box2d.b2JointFactory', 'box2d.b2Math', 'box2d.b2Settings', 'box2d.b2TimeStep', 'box2d.b2WorldCallbacks'], false);
goog.addDependency('../../../../Box2D/Box2D/Dynamics/b2WorldCallbacks.js', ['box2d.b2WorldCallbacks'], ['box2d.b2Settings'], false);
goog.addDependency('../../../../Box2D/Box2D/Particle/b2Particle.js', ['box2d.b2Particle', 'box2d.b2ParticleDef', 'box2d.b2ParticleFlag'], [], false);
goog.addDependency('../../../../Box2D/Box2D/Particle/b2ParticleGroup.js', ['box2d.b2ParticleGroup', 'box2d.b2ParticleGroupDef'], ['box2d.b2Particle'], false);
goog.addDependency('../../../../Box2D/Box2D/Particle/b2ParticleSystem.js', ['box2d.b2ParticleSystem'], ['box2d.b2Particle', 'box2d.b2ParticleGroup', 'box2d.b2TimeStep'], false);
goog.addDependency('../../../../Box2D/Box2D/Particle/b2StackQueue.js', ['box2d.b2StackQueue'], [], false);
goog.addDependency('../../../../Box2D/Box2D/Particle/b2VoronoiDiagram.js', ['box2d.b2VoronoiDiagram'], ['box2d.b2Collision', 'box2d.b2StackQueue'], false);
goog.addDependency('../../../../Box2D/Box2D/Rope/b2Rope.js', ['box2d.b2Rope'], ['box2d.b2Draw', 'box2d.b2Math'], false);
goog.addDependency('../../../../Box2D/Build/HelloWorld/main.js', ['main.start'], ['box2d.HelloWorld'], false);
goog.addDependency('../../../../Box2D/HelloWorld/HelloWorld.js', ['box2d.HelloWorld'], ['box2d'], false);
goog.addDependency('../../../../Contributions/Enhancements/Controllers/b2BuoyancyController.js', ['box2d.b2BuoyancyController'], ['box2d.b2Controller', 'box2d.b2Math', 'box2d.b2Settings', 'box2d.b2WorldCallbacks'], false);
goog.addDependency('../../../../Contributions/Enhancements/Controllers/b2ConstantAccelController.js', ['box2d.b2ConstantAccelController'], ['box2d.b2Controller', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Contributions/Enhancements/Controllers/b2ConstantForceController.js', ['box2d.b2ConstantForceController'], ['box2d.b2Controller', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Contributions/Enhancements/Controllers/b2Controller.js', ['box2d.b2Controller'], ['box2d.b2Settings'], false);
goog.addDependency('../../../../Contributions/Enhancements/Controllers/b2GravityController.js', ['box2d.b2GravityController'], ['box2d.b2Controller', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../Contributions/Enhancements/Controllers/b2TensorDampingController.js', ['box2d.b2TensorDampingController'], ['box2d.b2Controller', 'box2d.b2Math', 'box2d.b2Settings'], false);
goog.addDependency('../../../../google/closure-library/closure/goog/base.js', ['goog'], [], false);
